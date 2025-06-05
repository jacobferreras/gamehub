import cron from "node-cron";
import { db } from "../../../server.js";

const executeQuery = async (sql, params = [], retries = 1) => {
  try {
    return await db.promise().query(sql, params);
  } catch (error) {
    console.error(
      `Database query error: ${error.message} for query: ${sql.substring(
        0,
        100
      )}...`
    );

    if (
      error.message.includes("connection is in closed state") &&
      retries > 0
    ) {
      console.log(
        "Connection closed, waiting for reconnection and retrying..."
      );

      await new Promise((resolve) => setTimeout(resolve, 2000));
      return executeQuery(sql, params, retries - 1);
    }

    throw error;
  }
};

const getAll = async ({
  page = 1,
  limit = 8,
  game = "",
  random = false,
  region = "",
}) => {
  try {
    const offset = (page - 1) * limit;

    let condition = ` WHERE unix_timestamp > NOW()`;
    let params = [];
    if (game) {
      condition += ` AND game LIKE ?`;
      params.push(`%${game}%`);
    }

    if (region) {
      condition += ` AND region LIKE ?`;
      params.push(`%${region}%`);
    }

    let sql = `SELECT * FROM upcoming_games${condition}`;
    if (random) {
      sql += ` ORDER BY RAND()`;
    }
    sql += ` LIMIT ? OFFSET ?`;
    params.push(Number(limit));
    params.push(Number(offset));

    const result = await executeQuery(sql, params);

    const totalCountQuery =
      `SELECT COUNT(*) as total FROM upcoming_games` + condition;
    const totalCountResult = await executeQuery(totalCountQuery, params);
    const totalCount = totalCountResult[0][0].total;
    const totalPages = Math.ceil(totalCount / limit);

    if (!result[0] || result[0].length === 0) {
      return {
        message: region
          ? "No matches found for the selected region."
          : "No upcoming games found.",
        data: [],
        totalPages: 0,
        currentPage: page,
      };
    }

    return {
      message: "Upcoming games found",
      data: result[0],
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error("Error in getAll upcoming games:", error);
    throw error;
  }
};

const moveToGameResults = async () => {
  try {
    const [rows] = await executeQuery(`
      SELECT id, unix_timestamp 
      FROM upcoming_games 
      WHERE unix_timestamp IS NOT NULL AND unix_timestamp < NOW()
    `);

    console.log("Records to process:", rows);

    if (rows && rows.length > 0) {
      await executeQuery(`
        INSERT INTO game_result(id, game, team1, team2, logo1, logo2, match_series, match_event, region)
        SELECT id, game, team1, team2, logo1, logo2, match_series, match_event, region 
        FROM upcoming_games 
        WHERE unix_timestamp IS NOT NULL AND unix_timestamp < NOW()
      `);

      await executeQuery(`
        DELETE FROM upcoming_games 
        WHERE unix_timestamp IS NOT NULL AND unix_timestamp < NOW()
      `);

      console.log(`Successfully moved ${rows.length} games to game_result`);
    } else {
      console.log("No games to move to results");
    }
  } catch (error) {
    console.error("Error in moveToGameResults:", error);
  }
};

cron.schedule("*/10 * * * *", async () => {
  console.log("Cron job running: moving expired games...");
  try {
    await moveToGameResults();
    console.log("Cron job completed successfully");
  } catch (error) {
    console.error("[NODE-CRON] [ERROR]", error.message);
  }
});

export default {
  getAll,
  moveToGameResults,
};
