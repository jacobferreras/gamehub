import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import Loader from "./components/common/Loader";
import { Navigate } from "react-router-dom";

const MatchesScreen = lazy(() => import("./Screen/MatchesScreen"));
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
const NotFound = lazy(() => import("./components/common/NotFound"));

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/app" replace />} />
          <Route path="/app" element={<Layout />}>
            <Route index element={<HomeScreen />} />
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
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AppRoutes;
