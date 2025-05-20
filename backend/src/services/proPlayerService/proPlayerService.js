import { db } from "../../../server.js";

const getAll = async ({
  limit = 10,
  random = false,
  page = 1,
  search = "",
}) => {
  const offset = (page - 1) * limit;

  let condition = "";
  let params = [];

  if (search) {
    condition += (condition ? " AND" : " WHERE") + " name LIKE ?";
    params.push(`%${search}%`);
  }

  let sql = `SELECT * FROM proplayers${condition}`;
  if (random) {
    sql += " ORDER BY RAND()";
  } else {
    sql += " ORDER BY id DESC";
  }
  sql += " LIMIT ? OFFSET ?";
  params.push(Number(limit));
  params.push(Number(offset));

  const result = await db.promise().query(sql, params);

  const totalCountQuery = `SELECT COUNT(*) as total FROM proplayers${condition}`;
  const totalCountResult = await db
    .promise()
    .query(totalCountQuery, params.slice(0, params.length - 2));
  const totalCount = totalCountResult[0][0].total;
  const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;

  return {
    message: "Pro players found",
    data: result[0],
    totalPages,
    currentPage: page,
  };
};

const getProPlayerById = async (id) => {
  const sql = `SELECT * FROM proplayers WHERE id = ?`;
  const result = await db.promise().query(sql, [id]);

  if (result[0].length === 0) {
    return {
      message: "Pro player not found",
      data: null,
    };
  }

  return {
    message: "Pro player found",
    data: result[0][0],
  };
};
export default {
  getAll,
  getProPlayerById,
};
