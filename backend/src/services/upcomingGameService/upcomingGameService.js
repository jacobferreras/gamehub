import { db } from "../../../server.js";

const getAll = async ({
  page = 1,
  limit = 8,
  game = "",
  random = false,
  region = "",
}) => {
  const offset = (page - 1) * limit;

  let condition = ` WHERE unix_timestamp > NOW()`;
  let params = [];
  if (game) {
    condition += ` AND game LIKE ?`;
    params.push(`%${game}%`);
  }

  if (region) {
    condition += ` AND region LIKE ?`;
    params.push(`%${region}%`);
  }

  let sql = `SELECT * FROM upcoming_games${condition}`;
  if (random) {
    sql += ` ORDER BY RAND()`;
  }
  sql += ` LIMIT ? OFFSET ?`;
  params.push(Number(limit));
  params.push(Number(offset));

  const result = await db.promise().query(sql, params);

  const totalCountQuery =
    `SELECT COUNT(*) as total FROM upcoming_games` + condition;
  const totalCountResult = await db.promise().query(totalCountQuery, params);
  const totalCount = totalCountResult[0][0].total;
  const totalPages = Math.ceil(totalCount / limit);

  return {
    message: "Upcoming games found",
    data: result[0],
    totalPages,
    currentPage: page,
  };
};

export default {
  getAll,
};
