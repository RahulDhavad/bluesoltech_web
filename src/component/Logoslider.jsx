import { useState, useEffect } from "react";
import Slider from "react-infinite-logo-slider";

import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaHtml5,
  FaCss3,
  FaVuejs,
  FaGitAlt,
  FaPython,
  FaAws,
} from "react-icons/fa";

const Logoslider = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Slider
      width={windowSize[0] > 700 ? "200px" : "125px"}
      duration={15}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={"#fff"}
    >
      <Slider.Slide>
        <FaReact className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaNodeJs className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaAngular className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaHtml5 className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaCss3 className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaVuejs className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaGitAlt className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaPython className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaAws className="text-5xl" />
      </Slider.Slide>
    </Slider>
  );
};

export default Logoslider;
