import express from "express";
import path from "path";
import { createPool } from "mysql2";
import cors from "cors";
import pkg from "body-parser";
import { config } from "dotenv";
import valorantAccountRoute from "./src/routes/valorantRoutes/valorantAccountRoute.js";
import proPlayerRoute from "./src/routes/proPlayerRoutes/proPlayerRoute.js";
import articleRoute from "./src/routes/articleRoutes/articleRoute.js";
import gameHighlightsRoutes from "./src/routes/gameHighlightsRoutes/gameHighlightsRoute.js";
import upcomingGameRoute from "./src/routes/upcomingGameRoutes/upcomingGameRoute.js";
import dotaArticleRoutes from "./src/routes/dotaArticleRoutes/dotaArticleRoute.js";
import matchResultRoute from "./src/routes/matchResultRoutes/matchResultRoute.js";
import updateRoutes from "./src/routes/updateRoutes/updateRoute.js";
import agentRoutes from "./src/routes/agentRoutes/agentRoutes.js";

const { json } = pkg;

config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Content-disposition"],
    credentials: true,
  })
);
app.use(json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

let db;

function createDatabasePool() {
  db = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  db.on("error", function (err) {
    console.error("Database error:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("Database connection lost. Reconnecting...");
      reconnectDatabase();
    } else {
      throw err;
    }
  });
}

function reconnectDatabase(retries = 5, delay = 2000) {
  if (retries === 0) {
    console.error(
      "Failed to reconnect to the database after multiple attempts."
    );
    process.exit(1);
  }

  setTimeout(() => {
    console.log(
      `Attempting to reconnect to the database. Retries left: ${retries}`
    );
    try {
      createDatabasePool();
      console.log("Database reconnected successfully.");
    } catch (error) {
      console.error("Reconnection attempt failed:", error);
      reconnectDatabase(retries - 1, delay);
    }
  }, delay);
}

// Initialize the database pool
createDatabasePool();

app.get("/", (req, res) => {
  res.send("Welcome to the GameHub API!");
});

//routes
app.use("/valorantAccount", valorantAccountRoute);
app.use("/proplayers", proPlayerRoute);
app.use("/articles", articleRoute);
app.use("/gameHighlights", gameHighlightsRoutes);
app.use("/upcomingGames", upcomingGameRoute);
app.use("/dotaArticles", dotaArticleRoutes);
app.use("/matchResults", matchResultRoute);
app.use("/updates", updateRoutes);
app.use("/agents", agentRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

export { db };
