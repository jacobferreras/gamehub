import express from "express";
import path from "path";
import mysql from "mysql2";
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

const createDatabasePool = () => {
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
  });

  db.on("connection", (connection) => {
    console.log("New database connection established");

    connection.query("SET SESSION wait_timeout=28800");
  });

  db.on("enqueue", () => {
    console.log("Waiting for available connection slot");
  });

  db.on("error", function (err) {
    console.error("Database error:", err);
    if (
      err.code === "PROTOCOL_CONNECTION_LOST" ||
      err.code === "ECONNRESET" ||
      err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"
    ) {
      console.log("Database connection lost. Attempting to reconnect...");
      reconnectDatabase();
    } else {
      console.error("Unhandled database error:", err);
    }
  });

  db.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Database connected successfully");
    connection.release();
  });

  setInterval(() => {
    db.query("SELECT 1")
      .then(() => console.log("Keepalive query successful"))
      .catch((err) => console.error("Keepalive query failed:", err));
  }, 60000);
  return db;
};

function reconnectDatabase(retries = 5, delay = 2000) {
  if (retries === 0) {
    console.error(
      "Failed to reconnect to the database after multiple attempts."
    );
    console.error("Applications will retry on next request");
    return;
  }

  setTimeout(() => {
    console.log(
      `Attempting to reconnect to the database. Retries left: ${retries}`
    );
    try {
      if (db) {
        try {
          db.end(() => {
            console.log("Old database connections closed");
            db = createDatabasePool();
          });
        } catch (endError) {
          console.error("Error ending database pool:", endError);
          db = createDatabasePool();
        }
      } else {
        db = createDatabasePool();
      }
      console.log("Database reconnection initiated");
    } catch (error) {
      console.error("Reconnection attempt failed:", error);
      reconnectDatabase(retries - 1, delay);
    }
  }, delay);
}

db = createDatabasePool();

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

export { db, reconnectDatabase };
