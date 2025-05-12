import { db } from "../../../server.js";

const getPubgSchedule = async ({ limit = 10, region = "" }) => {
  let condition = ``;
  let sql = `SELECT * FROM pubg_schedule`;
  let params = [];
  if (region) {
    condition = ` WHERE region LIKE ?`;
    params.push(`%${region}%`);
  }
  if (condition) {
    sql += condition;
  }

  sql += ` LIMIT ?`;
  params.push(Number(limit));
  const result = await db.promise().query(sql, params);

  return {
    message: "PUBG schedule found",
    data: result[0],
  };
};

export default {
  getPubgSchedule,
};
