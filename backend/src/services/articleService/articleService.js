import { db } from "../../../server.js";

const getAll = async ({ limit = 10, type = "" }) => {
  let condition = ``;
  let sql = `SELECT * FROM valorant_article`;
  if (type) {
    condition = ` WHERE game LIKE '%${type}%'`;
  }
  if (condition) {
    sql += condition;
  }

  sql += ` LIMIT ${limit}`;
  const result = await db.promise().query(sql);

  return {
    message: "Articles found",
    data: result[0],
  };
};

export default {
  getAll,
};
