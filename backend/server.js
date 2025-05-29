import express from "express";
import path from "path";
import { createConnection } from "mysql2";
import cors from "cors";
import pkg from "body-parser";
import { config } from "dotenv";
import valorantAccountRoute from "./src/routes/valorantRoutes/valorantAccountRoute.js";
import proPlayerRoute from "./src/routes/proPlayerRoutes/proPlayerRoute.js";
import articleRoute from "./src/routes/articleRoutes/articleRoute.js";
import gameHighlightsRoutes from "./src/routes/gameHighlightsRoutes/gameHighlightsRoute.js";
import upcomingGameRoute from "./src/routes/upcomingGameRoutes/upcomingGameRoute.js";
import dotaArticleRoutes from "./src/routes/dotaArticleRoutes/dotaArticleRoute.js";
import pubgArticleRoutes from "./src/routes/pubgArticleRoutes/pubgArticleRoute.js";
import pubgScheduleRoute from "./src/routes/pubgScheduleRoutes/pubgScheduleRoute.js";
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

const db = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//routes
app.use("/valorantAccount", valorantAccountRoute);
app.use("/proplayers", proPlayerRoute);
app.use("/articles", articleRoute);
app.use("/gameHighlights", gameHighlightsRoutes);
app.use("/upcomingGames", upcomingGameRoute);
app.use("/dotaArticles", dotaArticleRoutes);
app.use("/pubgArticles", pubgArticleRoutes);
app.use("/pubgSchedule", pubgScheduleRoute);
app.use("/matchResults", matchResultRoute);
app.use("/updates", updateRoutes);
app.use("/agents", agentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { db };
