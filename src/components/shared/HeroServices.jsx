import React from "react";

const HeroServices = ({
  smallText = "Look at our services",
  headingPart1 = "Explore",
  headingPart2 = "our",
  headingHighlight = "services",
  paragraph = "With DODEAL, your goals are our mission. From ground breaking marketing campaigns to seamless tech integrations",
}) => {
  return (
    <div className="flex flex-col gap-4 leading-none items-center text-center">
      <div className="rounded-full text-[16px] md:text-[20px] px-4 py-2 capitalize w-fit bg-transparent border border-[rgba(0, 174, 107, 0.5)] text-white">
        {smallText}
      </div>

      <h1 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold capitalize w-fit">
        <span className="text-white">{headingPart1} </span>
        <span className="text-white">{headingPart2} </span>
        <span className="text-green-700">{headingHighlight}</span>
      </h1>

      <p className="text-[rgba(211, 211, 211, 1)] w-full md:w-[30%] text-[12px] md:text-[20px] leading-relaxed">
        {paragraph}
      </p>
    </div>
  );
};

export default HeroServices;
