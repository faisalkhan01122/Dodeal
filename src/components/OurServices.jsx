import React from "react";
import HeroServices from "./shared/HeroServices";
import bgImage from "../assets/images/bgimg.png";

import ServicesSection from "./shared/ServicesSection";
const OurServices = () => {
  return (
    <section
      className="relative w-full min-h-screen  text-center "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/5"></div> */}

      {/* HeroServices content */}
      <div className="relative z-10 pt-10 sm:pt-24 md:pt-28">
        <HeroServices
          smallText="Look at our services"
          headingPart1="Explore"
          headingPart2="our"
          headingHighlight="services"
          paragraph="With DODEAL, your goals are our mission. From ground breaking marketing campaigns to seamless tech integrations"
        />
      </div>
      <ServicesSection />
    </section>
  );
};

export default OurServices;
