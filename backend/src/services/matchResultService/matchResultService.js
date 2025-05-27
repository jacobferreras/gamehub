import { db } from "../../../server.js";

const getMatchResults = async ({ page = 1, limit = 8, region = "" }) => {
  const offset = (page - 1) * limit;

  let condition = ` WHERE (score1 != 0 OR score2 != 0)`;
  let params = [];

  if (region) {
    condition += ` AND region LIKE ?`;
    params.push(`%${region}%`);
  }

  let sql = `SELECT * FROM game_result${condition} ORDER BY id DESC LIMIT ? OFFSET ?`;
  params.push(Number(limit));
  params.push(Number(offset));

  const result = await db.promise().query(sql, params);

  const countParams = params.slice(0, region ? 1 : 0);
  const totalCountQuery = `SELECT COUNT(*) as total FROM game_result${condition}`;
  const totalCountResult = await db
    .promise()
    .query(totalCountQuery, countParams);
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
