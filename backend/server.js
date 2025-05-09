import express from "express";
import { createConnection } from "mysql2";
import cors from "cors";
import pkg from "body-parser";
import { config } from "dotenv";
import valorantAccountRoute from "./src/routes/valorantRoutes/valorantAccountRoute.js";
import proPlayerRoute from "./src/routes/proPlayerRoutes/proPlayerRoute.js";
import articleRoute from "./src/routes/articleRoutes/articleRoute.js";

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

const db = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to the database.");
});

//routes
app.use("/valorantAccount", valorantAccountRoute);
app.use("/proplayers", proPlayerRoute);
app.use("/articles", articleRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { db };
