import { db } from "../../server.js";

const getValorantAccountById = async (id) => {
  const query = "SELECT * FROM user_accounts WHERE id = ?";
  const value = [id];
  const result = await db.promise().query(query, value);
  if (result[0].length === 0) {
    throw new Error("Valorant account not found");
  }
  return {
    message: "Valorant account found",
    data: result[0],
  };
};

const addValorantAccountById = async (account) => {
  const query = "INSERT INTO user_accounts SET ?";

  const value = [account];
  const result = await db.promise().query(query, value);
  if (result[0].affectedRows === 0) {
    throw new Error("Valorant account not added");
  }
  const resultQuery = "SELECT * FROM user_accounts WHERE id = ?";
  const resultId = [result[0].insertId];
  const resultAccount = await db.promise().query(resultQuery, resultId);
  if (resultAccount[0].length === 0) {
    throw new Error("Valorant account not found after adding");
  }
  return {
    message: "Valorant account added",
    data: resultAccount[0][0],
  };
};

const updateValorantAccountById = async (id, data) => {
  const query = "UPDATE user_accounts SET ? WHERE id = ?";
  const value = [data, id];
  const result = await db.promise().query(query, value);
  if (result[0].affectedRows === 0) {
    throw new Error("Valorant account not updated");
  }
  const resultQuery = "SELECT * FROM user_accounts WHERE id = ?";
  const resultId = [id];
  const resultAccount = await db.promise().query(resultQuery, resultId);
  if (resultAccount[0].length === 0) {
    throw new Error("Valorant account not found after updating");
  }
  return {
    message: "Valorant account updated",
    data: resultAccount[0][0],
  };
};

const deleteValorantAccountById = async (id) => {
  const query = "DELETE FROM user_accounts WHERE id = ?";
  const value = [id];
  const result = await db.promise().query(query, value);
  if (result[0].affectedRows === 0) {
    throw new Error("Valorant account not deleted");
  }
  return {
    message: "Valorant account deleted",
    data: result[0],
  };
};

const getAllValorantAccounts = async ({
  page = 1,
  limit = 5,
  rank = "",
  search = "",
}) => {
  const offset = (page - 1) * limit;

  let condition = ``;
  let sql = `SELECT * FROM user_accounts`;
  if (rank) {
    condition += ` WHERE rank LIKE '%${rank}%'`;
  }
  if (rank && search) {
    condition += ` AND (ign LIKE '%${search}%' OR userName LIKE '%${search}%')`;
  } else if (search) {
    condition += ` WHERE ign LIKE '%${search}%' OR userName LIKE '%${search}%'`;
  }
  if (condition) {
    sql += condition;
  }

  sql += ` LIMIT ${limit} OFFSET ${offset}`;
  const result = await db.promise().query(sql);

  const countSql = "SELECT COUNT(*) as total FROM user_accounts" + condition;
  const countResult = await db.promise().query(countSql);
  const totalAccounts = countResult[0][0].total;
  const totalPages = Math.ceil(totalAccounts / limit);

  return {
    data: result[0],
    totalPages,
    currentPage: page,
  };
};

export default {
  getValorantAccountById,
  addValorantAccountById,
  updateValorantAccountById,
  deleteValorantAccountById,
  getAllValorantAccounts,
};
