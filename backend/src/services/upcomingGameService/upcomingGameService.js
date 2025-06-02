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
};

const moveToGameResults = async () => {
  await db.promise().query(
    `INSERT INTO game_result(id, game, team1, team2, logo1, logo2, match_series, match_event, region)
       SELECT id, game, team1, team2, logo1, logo2, match_series, match_event, region FROM upcoming_games WHERE unix_timestamp < DATE_ADD(NOW(), INTERVAL 8 HOUR)`
  );
  await db.promise().query(`
    DELETE FROM upcoming_games WHERE unix_timestamp < DATE_ADD(NOW(), INTERVAL 8 HOUR)
  `);
};
cron.schedule("* * * * *", moveToGameResults);

export default {
  getAll,
};
