import { db } from "../../../server.js";

const getDotaArticles = async ({ Limit = 10, type = "" }) => {
  let sql = `SELECT * FROM dota2_article`;
  if (type) {
    sql += ` WHERE type LIKE '%${type}%'`;
  }
  sql += ` ORDER BY created_at DESC LIMIT ${Limit}`;
  const result = await db.promise().query(sql);

  return {
    message: "Articles found",
    data: result[0],
  };
};

export default {
  getDotaArticles,
};
