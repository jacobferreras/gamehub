import { db } from "../../../server.js";

const getAll = async ({ limit = 10, game = "" }) => {
  const query = "SELECT * FROM proplayers LIMIT ?";
  const values = [parseInt(limit)];
  const result = await db.promise().query(query, values);
  if (result[0].length === 0) {
    throw new Error("No valorant pro players found");
  }
  return {
    message: "Valorant pro players found",
    data: result[0],
  };
};

export default {
  getAll,
};
