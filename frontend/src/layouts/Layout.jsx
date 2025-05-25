import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};

export default Layout;
