import { Navigate, Routes, Route } from "react-router-dom";

import ValorantAccountScreen from "./pages/ValorantScreen";
// import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dota2AccountScreen from "./pages/Dota2Screen";
import PubgScreen from "./pages/PubgScreen";
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
        <Route path="pubg" element={<PubgScreen />} />
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
