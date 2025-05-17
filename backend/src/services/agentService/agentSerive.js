import { db } from "../../../server.js";

const getAllAgents = async ({ page = 1, limit = 10, role = "" }) => {
  const offset = (page - 1) * limit;

  let condition = ``;
  let params = [];

  if (role) {
    condition += ` WHERE role LIKE ?`;
    params.push(`%${type}%`);
  }

  let sql = `SELECT * FROM agent${condition} ORDER BY id DESC`;

  sql += ` LIMIT ? OFFSET ?`;
  params.push(Number(limit));
  params.push(Number(offset));

  const result = await db.promise().query(sql, params);

  const totalCountQuery = `SELECT COUNT(*) as total FROM agent` + condition;
  const totalCountResult = await db.promise().query(totalCountQuery, params);
  const totalCount = totalCountResult[0][0].total;
  const totalPages = Math.ceil(totalCount / limit);

  return {
    message: "Agent found",
    data: result[0],
    totalPages,
    currentPage: page,
  };
};

const getAgentById = async (id) => {
  const sql = `SELECT * FROM agent WHERE id = ?`;
  const result = await db.promise().query(sql, [id]);

  if (result[0].length === 0) {
    return {
      message: "Agent not found",
      data: null,
    };
  }

  return {
    message: "Agent found",
    data: result[0][0],
  };
};

export default {
  getAllAgents,
  getAgentById,
};
