import React from "react";
import HeroServices from "./shared/HeroServices";
import bgImage from "../assets/images/bgimg.png";

import ServicesSection from "./shared/ServicesSection";
import WeatherDashboard from "./shared/WeatherDashboard";
const WeatherSection = () => {
  return (
    <section
      className="relative w-full min-h-screen  "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* HeroServices content */}
      <div className="relative z-10 pt-10 sm:pt-24 md:pt-28 px-4">
        <HeroServices
          smallText="Look at our services"
          headingPart1="explore "
          headingPart2="our"
          headingHighlight="weather"
          paragraph="With DODEAL, your goals are our mission. From ground breaking marketing campaigns to seamless tech integrations"
        />
      </div>
      {/* <ServicesSection /> */}
      <WeatherDashboard />
    </section>
  );
};

export default WeatherSection;
