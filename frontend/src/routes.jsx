import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MatchesScreen from "./Screen/MatchesScreen";
import LoginPage from "./Screen/LoginPage";
import NewsScreen from "./Screen/NewsScreen";
import GuideScreen from "./Screen/GuideScreen";
import HomeScreen from "./Screen/HomeScreen";
import Layout from "./layout";
import HighlightScreen from "./Screen/HighlightScreen";
import PlayerScreen from "./Screen/PlayerScreen";
import MatchResultScreen from "./Screen/MatchResultScreen";
import UpdateScreen from "./Screen/UpdateScreen";
import NewsLayout from "./NewsLayout";
import AgentDetailScreen from "./Screen/AgentDetailScreen";
import PlayerDetailScreen from "./Screen/PlayerDetailScreen";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route path="home" element={<HomeScreen />} />
          <Route path="matches" element={<MatchesScreen />} />
          <Route path="matches/result" element={<MatchResultScreen />} />
          <Route path="news" element={<NewsLayout />}>
            <Route path="article" element={<NewsScreen />} />
            <Route path="update" element={<UpdateScreen />} />
          </Route>
          <Route path="agents" element={<GuideScreen />} />
          <Route path="agents/:id" element={<AgentDetailScreen />} />
          <Route path="highlights" element={<HighlightScreen />} />
          <Route path="players" element={<PlayerScreen />} />
          <Route path="players/:id" element={<PlayerDetailScreen />} />
        </Route>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
