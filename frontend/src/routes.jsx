import { Navigate, Routes, Route } from "react-router-dom";

import ValorantAccountScreen from "./Screen/ValorantScreen";
import LoginPage from "./Screen/LoginPage";
import Dota2AccountScreen from "./Screen/Dota2Screen";
import PubgScreen from "./Screen/PubgScreen";
import HomeScreen from "./Screen/HomeScreen";
import Layout from "./layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/app/home" element={<HomePage />} /> */}
      <Route path="/app" element={<Layout />}>
        <Route path="home" element={<HomeScreen />} />
        <Route path="valorant" element={<ValorantAccountScreen />} />
        <Route path="dota2" element={<Dota2AccountScreen />} />
        <Route path="pubg" element={<PubgScreen />} />
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
