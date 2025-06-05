import { db } from "../../../server.js";

const executeQuery = async (sql, params = [], retries = 1) => {
  try {
    return await db.promise().query(sql, params);
  } catch (error) {
    console.error(
      `Database query error: ${error.message} for query: ${sql.substring(
        0,
        100
      )}...`
    );

    if (
      error.message.includes("connection is in closed state") &&
      retries > 0
    ) {
      console.log(
        "Connection closed, waiting for reconnection and retrying..."
      );

      await new Promise((resolve) => setTimeout(resolve, 2000));
      return executeQuery(sql, params, retries - 1);
    }

    throw error;
  }
};

const getAll = async ({ page = 1, limit = 10, type = "" }) => {
  const offset = (page - 1) * limit;

  let condition = ``;
  let params = [];

  if (type) {
    condition += ` WHERE type LIKE ?`;
    params.push(`%${type}%`);
  }

  let sql = `SELECT * FROM valorant_article${condition} ORDER BY created_at DESC`;

  sql += ` LIMIT ? OFFSET ?`;
  params.push(Number(limit));
  params.push(Number(offset));

  try {
    const result = await executeQuery(sql, params);

    const totalCountQuery =
      `SELECT COUNT(*) as total FROM valorant_article` + condition;
    const totalCountResult = await executeQuery(totalCountQuery, params);
    const totalCount = totalCountResult[0][0].total;
    const totalPages = Math.ceil(totalCount / limit);

    return {
      message: "Articles found",
      data: result[0],
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error("Error in getAll articles:", error);
    throw error;
  }
};

export default {
  getAll,
};
