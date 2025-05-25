import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import Loader from "./components/common/Loader";

const MatchesScreen = lazy(() => import("./Screen/MatchesScreen"));
const LoginPage = lazy(() => import("./Screen/LoginPage"));
const NewsScreen = lazy(() => import("./Screen/NewsScreen"));
const HomeScreen = lazy(() => import("./Screen/HomeScreen"));
const Layout = lazy(() => import("./layouts/Layout"));
const HighlightScreen = lazy(() => import("./Screen/HighlightScreen"));
const PlayerScreen = lazy(() => import("./Screen/PlayerScreen"));
const MatchResultScreen = lazy(() => import("./Screen/MatchResultScreen"));
const UpdateScreen = lazy(() => import("./Screen/UpdateScreen"));
const NewsLayout = lazy(() => import("./layouts/NewsLayout"));
const AgentDetailScreen = lazy(() => import("./Screen/AgentDetailScreen"));
const PlayerDetailScreen = lazy(() => import("./Screen/PlayerDetailScreen"));
const AgentScreen = lazy(() => import("./Screen/AgentScreen"));

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/app" element={<Layout />}>
            <Route path="home" element={<HomeScreen />} />
            <Route path="matches" element={<MatchesScreen />} />
            <Route path="matches/result" element={<MatchResultScreen />} />
            <Route path="news" element={<NewsLayout />}>
              <Route path="article" element={<NewsScreen />} />
              <Route path="update" element={<UpdateScreen />} />
            </Route>
            <Route path="agents" element={<AgentScreen />} />
            <Route path="agents/:id" element={<AgentDetailScreen />} />
            <Route path="highlights" element={<HighlightScreen />} />
            <Route path="players" element={<PlayerScreen />} />
            <Route path="players/ign/:ign" element={<PlayerDetailScreen />} />
          </Route>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AppRoutes;
