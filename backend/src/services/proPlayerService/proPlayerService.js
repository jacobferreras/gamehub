import { db } from "../../../server.js";

const getAll = async ({ limit = 10, random = false }) => {
  let condition = ``;
  let sql = `SELECT * FROM proplayers`;
  let params = [];

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
    message: "Pro players found",
    data: result[0],
  };
};

export default {
  getAll,
};
