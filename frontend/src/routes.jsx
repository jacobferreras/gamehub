import { Navigate, Routes, Route } from "react-router-dom";

import MatchesScreen from "./Screen/MatchesScreen";
import LoginPage from "./Screen/LoginPage";
import NewsScreen from "./Screen/NewsScreen";
import GuideScreen from "./Screen/GuideScreen";
import HomeScreen from "./Screen/HomeScreen";
import Layout from "./layout";
import RankingScreen from "./Screen/RankingScreen";
import HighlightScreen from "./Screen/HighlightScreen";
import PlayerScreen from "./Screen/PlayerScreen";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/app/home" element={<HomePage />} /> */}
      <Route path="/app" element={<Layout />}>
        <Route path="home" element={<HomeScreen />} />
        <Route path="matches" element={<MatchesScreen />} />
        <Route path="news" element={<NewsScreen />} />
        <Route path="guide" element={<GuideScreen />} />
        <Route path="ranking" element={<RankingScreen />} />
        <Route path="highlights" element={<HighlightScreen />} />
        <Route path="players" element={<PlayerScreen />} />
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
