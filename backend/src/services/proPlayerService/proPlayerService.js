import { db } from "../../../server.js";

const getAll = async ({ limit = 10, game = "", random = false }) => {
  let condition = ``;
  let sql = `SELECT * FROM proplayers`;
  if (game) {
    condition = ` WHERE game LIKE '%${game}%'`;
  }
  if (condition) {
    sql += condition;
  }

  if (random) {
    sql += ` ORDER BY RAND()`;
  }

  sql += ` LIMIT ${limit}`;
  const result = await db.promise().query(sql);

  return {
    message: "Pro players found",
    data: result[0],
  };
};

export default {
  getAll,
};
