import { db } from "../../../server.js";

const getAll = async ({ limit = 10, game = "", random = false }) => {
  let condition = ` WHERE unix_timestamp > NOW()`;
  let params = [];
  if (game) {
    condition += ` AND game LIKE ?`;
    params.push(`%${game}%`);
  }

  let sql = `SELECT * FROM upcoming_games${condition}`;
  if (random) {
    sql += ` ORDER BY RAND()`;
  }
  sql += ` LIMIT ?`;
  params.push(Number(limit));

  const result = await db.promise().query(sql, params);

  return {
    message: "Upcoming games found",
    data: result[0],
  };
};

export default {
  getAll,
};
