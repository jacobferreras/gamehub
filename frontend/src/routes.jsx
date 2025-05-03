import { Navigate, Routes, Route } from "react-router-dom";

import ValorantAccountScreen from "./pages/ValorantAccountScreen";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dota2AccountScreen from "./pages/Dota2AccountScreen";
import LandingPage from "./pages/LandingPage";
import Layout from "./layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/app/landing" element={<LandingPage />} />
      <Route path="/app" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="valorant" element={<ValorantAccountScreen />} />
        <Route path="dota2" element={<Dota2AccountScreen />} />
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
