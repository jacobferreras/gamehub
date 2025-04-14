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

const getAllValorantAccounts = async () => {
  const query = "SELECT * FROM user_accounts";
  const result = await db.promise().query(query);
  if (result[0].length === 0) {
    throw new Error("No Valorant accounts found");
  }
  return {
    message: "Valorant accounts found",
    data: result[0],
  };
};

export default {
  getValorantAccountById,
  addValorantAccountById,
  updateValorantAccountById,
  deleteValorantAccountById,
  getAllValorantAccounts,
};
