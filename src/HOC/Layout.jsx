import React, { useEffect, useState } from "react";
import HeaderNavbar from "../Components/Navigation/HeaderNavbar";
import MainNavbar from "../Components/Navigation/MainNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <HeaderNavbar />

      <MainNavbar />

      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
