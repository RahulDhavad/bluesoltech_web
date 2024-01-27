import React from "react";
import Price from "../component/Price";
import Services from "../component/Services";
import Video from "../component/Video";
import Gallery from "../component/About";
import Logoslider from "../component/Logoslider";

import pc from "../assets/img/pc.webp";

const Home = () => {
  return (
    <div className="bg-[#0F0E0E]">
      <div className="h-[95vh] flex flex-col items-center justify-evenly bg-[#0F0E0E] text-white">
        <p className="text-4xl leading-[60px] md:text-7xl text-center font-[poppins] md:leading-[110px]">
          <div className="z-4 absolute w-[150px] h-[50px] border-white border-[1px] rounded-[100%] rotate-[-30deg] transition-all duration-300 hover:rotate-[30deg] "></div>
          We provide<br></br> IT Solutions for <br></br>your{" "}
          <span className="font-bold ">TASTE</span>
        </p>
        <div className="w-full">
          <Logoslider />
        </div>
      </div>
      <div className="flex justify-center items-center  mb-8">
        <div className="flex flex-col justify-center items-center md:w-[65%] 2xl:w-[65%] p-4">
          <div className="flex flex-col-reverse md:flex-row justify-between w-full">
            <div className="flex flex-col md:w-[50%] justify-between ">
              <p className="text-2xl text-center md:text-3xl md:text-start lg:text-5xl text-white p-2 transition-all duration-300 hover:rotate-[-2deg]">
                Solution to your digital Problems
              </p>
              <p className="text-sm text-center text-gray-500 py-4 w-full md:text-xl md:text-start md:flex md:justify-start transition-all duration-300 hover:rotate-[-2deg]">
                10 YEARS OF EXPERIENCE IN OUTSOURCING
              </p>
            </div>
            <img
              className="w-full md:w-[50%] h-auto object-contain transition-all duration-300 hover:rotate-2"
              src={pc}
            />
          </div>
        </div>
      </div>
      <Services />

      {/* <Video /> */}
      {/* <Price /> */}
      {/* <Gallery /> */}
    </div>
  );
};

export default Home;
