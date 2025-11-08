import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import WeatherSection from "./components/WeatherSection";

const App = () => {
  return (
    <>
      <div
        className=" w-full min-h-[1024px] text-white overflow-hidden"
        style={{ fontFamily: "'Effra Trial', sans-serif" }}
      >
        {/* <Navbar /> */}

        <HeroSection />
        <OurServices />
        <WeatherSection />
      </div>
    </>
  );
};

export default App;
