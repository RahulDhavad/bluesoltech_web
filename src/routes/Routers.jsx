import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Teammember from "../Pages/Teammember";
import About from "../component/About";
import Get from "../Pages/Get";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Teammember />} />
      <Route path="/contact" element={<Get />} />
    </Routes>
  );
};

export default Routers;
