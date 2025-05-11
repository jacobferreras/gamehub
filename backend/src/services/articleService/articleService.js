import { db } from "../../../server.js";

const getAll = async ({ limit = 10, type = "" }) => {
  let sql = `SELECT * FROM valorant_article`;
  if (type) {
    sql += ` WHERE type LIKE '%${type}%'`;
  }
  sql += ` ORDER BY created_at DESC LIMIT ${limit}`;
  const result = await db.promise().query(sql);

  return {
    message: "Articles found",
    data: result[0],
  };
};

export default {
  getAll,
};
