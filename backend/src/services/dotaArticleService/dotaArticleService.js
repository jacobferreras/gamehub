import { db } from "../../../server.js";

const getDotaArticles = async ({ Limit = 10, type = "" }) => {
  let sql = `SELECT * FROM dota2_article`;
  let params = [];
  if (type) {
    sql += ` WHERE type LIKE ?`;
    params.push(`%${type}%`);
  }
  sql += ` ORDER BY created_at DESC LIMIT ?`;
  params.push(Number(Limit));
  const result = await db.promise().query(sql, params);

  return {
    message: "Articles found",
    data: result[0],
  };
};

export default {
  getDotaArticles,
};
