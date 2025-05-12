import { db } from "../../../server.js";

const getAll = async ({ limit = 10, game = "", random = false }) => {
  let condition = ``;
  let sql = `SELECT * FROM game_highlights`;
  let params = [];
  if (game) {
    condition = ` WHERE game LIKE ?`;
    params.push(`%${game}%`);
  }
  if (condition) {
    sql += condition;
  }

  if (random) {
    sql += ` ORDER BY RAND()`;
  }

  sql += ` LIMIT ?`;
  params.push(Number(limit));
  const result = await db.promise().query(sql, params);

  return {
    message: "Game highlights found",
    data: result[0],
  };
};

export default {
  getAll,
};
