import React from "react";
// eslint-disable-next-line no-unused-vars
import Preview from "../views/Preview";
import HomeDark from "../views/all-home-version/HomeDark";
// import HomeRtl from "../views/all-home-version/HomeRtl";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ContextProvider>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<HomeDark />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/home-dark" element={<HomeDark />} />
          <Route path="/home-rtl" element={<HomeRtl />} /> */}
        </Routes>
      </ContextProvider>
    </>
  );
};

export default AllRoutes;
