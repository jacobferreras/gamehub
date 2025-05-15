import { db } from "../../../server.js";

const getMatchResults = async ({ page = 1, limit = 8, region = "" }) => {
  const offset = (page - 1) * limit;

  let conditon = ``;
  let params = [];

  if (region) {
    conditon += ` WHERE region LIKE ?`;
    params.push(`%${region}%`);
  }

  let sql = `SELECT * FROM game_results${conditon}`;

  sql += ` LIMIT ? OFFSET ?`;
  params.push(Number(limit));
  params.push(Number(offset));

  const result = await db.promise().query(sql, params);

  const totalCountQuery =
    `SELECT COUNT(*) as total FROM game_results` + conditon;
  const totalCountResult = await db.promise().query(totalCountQuery, params);
  const totalCount = totalCountResult[0][0].total;
  const totalPages = Math.ceil(totalCount / limit);

  return {
    message: "Match results found",
    data: result[0],
    totalPages,
    currentPage: page,
  };
};

export default {
  getMatchResults,
};
