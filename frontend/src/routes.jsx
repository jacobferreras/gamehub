import { Navigate, Routes, Route } from "react-router-dom";

import ValorantAccountScreen from "./pages/ValorantAccountScreen";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dota2AccountScreen from "./pages/Dota2AccountScreen";
import HomePage from "./pages/HomePage";
import Layout from "./layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/app/home" element={<HomePage />} /> */}
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
