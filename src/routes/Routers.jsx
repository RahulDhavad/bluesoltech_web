import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Teammember from '../Pages/Teammember';


const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path='/team' element={<Teammember/>}/>
        
    </Routes>
  )
}

export default Routers