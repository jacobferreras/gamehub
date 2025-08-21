import cron from "node-cron";
import { db } from "../../../server.js";

const getAll = async ({
  page = 1,
  limit = 8,
  game = "",
  random = false,
  region = "",
}) => {
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

  const result = await db.promise().query(sql, params);

  const totalCountQuery =
    `SELECT COUNT(*) as total FROM upcoming_games` + condition;
  const totalCountResult = await db.promise().query(totalCountQuery, params);
  const totalCount = totalCountResult[0][0].total;
  const totalPages = Math.ceil(totalCount / limit);

  return {
    message: "Upcoming games found",
    data: result[0],
    totalPages,
    currentPage: page,
  };
};

const moveToGameResults = async () => {
  try {
    // First check if connection is active with a simple query
    await db.promise().query("SELECT 1");

    // Then run the actual operation
    await db.promise().query(
      `INSERT INTO game_result(id, game, team1, team2, logo1, logo2, match_series, match_event, region)
       SELECT id, game, team1, team2, logo1, logo2, match_series, match_event, region FROM upcoming_games WHERE unix_timestamp < NOW()`
    );

    await db.promise().query(`
      DELETE FROM upcoming_games WHERE unix_timestamp < NOW()
    `);
    console.log("Successfully moved past games to results");
  } catch (error) {
    console.error("Error in moveToGameResults cron job:", error.message);
    // Don't rethrow - allow cron to continue next time
  }
};

// Wrap the cron handler in a try/catch as well for extra safety
cron.schedule("* * * * *", async () => {
  try {
    await moveToGameResults();
  } catch (error) {
    console.error("Cron job error:", error.message);
  }
});

export default {
  getAll,
};
