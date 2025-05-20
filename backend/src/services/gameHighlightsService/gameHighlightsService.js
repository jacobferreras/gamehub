import { db } from "../../../server.js";

const getAll = async ({ limit = 10, page = 1, type = "" }) => {
  const offset = (page - 1) * limit;

  let condition = ``;
  let params = [];

  if (type) {
    condition = ` WHERE type LIKE ?`;
    params.push(`%${type}%`);
  }

  let sql = `SELECT * FROM game_highlights${condition} ORDER BY id DESC`;

  sql += ` LIMIT ? OFFSET ?`;
  params.push(Number(limit));
  params.push(Number(offset));

  const result = await db.promise().query(sql, params);

  const totalCountQuery =
    `SELECT COUNT(*) as total FROM game_highlights` + condition;
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
  getAll,
};
