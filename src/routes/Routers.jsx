import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Team from '../component/team/Team';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/team" element={<Team/>}/>
    </Routes>
  )
}

export default Routers