import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLOR_PRIMARY = "#00af6b";
const COLOR_GREEN_700 = "#008138";
const COLOR_GREEN_300 = "#7bf1a8";
const COLOR_BUTTON_BORDER = "#03ff9e";
const COLOR_BUTTON_SHADOW = "0 0 20.7px 0 rgba(0,174,107,0.74)";
const BUTTON_BG = "rgba(0,175,107,0.5)";
const COLOR_SECONDARY = "#022334";

const servicesData = [
  {
    id: "creative-production",
    title: "Creative Production",
    text: "We produce stunning visuals, videos, and content that captivate your audience and elevate your brand presence.",
    iconSrc: "https://dodeal.com/assets/images/svg/s-creative.svg",
    wrapperClass:
      "relative pr-[60px] rounded-l-full lg:pr-[150px] cursor-pointer transition-all duration-1000",
  },
  {
    id: "web-mobile",
    title: "Web & Mobile App",
    text: "We craft stunning, high-performance web and mobile applications tailored to your business needs, ensuring a seamless user experience across all devices.",
    iconSrc: "https://dodeal.com/assets/images/svg/s-webmobile.svg",
    wrapperClass:
      "relative pr-[110px] rounded-l-full lg:pr-[250px] cursor-pointer transition-all duration-1000",
  },
  {
    id: "seo-sem",
    title: "SEO and SEM",
    text: "Boost your visibility and drive targeted traffic with our expert search engine optimization (SEO) and search engine marketing (SEM) strategies.",
    iconSrc: "https://dodeal.com/assets/images/svg/s-seosem.svg",
    wrapperClass:
      "w-[72%] cursor-pointer rounded-l-full px-4 py-2 pl-[10px] pr-[10px] lg:pr-[180px] transition-all duration-1000",
    active: true,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    text: "Struggling to reach the right customers or tired of wasting money on ads that don’t convert? At Do Deal, we design digital campaigns that target your ideal audience, cut unnecessary costs, and bring you measurable growth you can actually see.",
    iconSrc: "https://dodeal.com/assets/images/svg/s-digital.svg",
    wrapperClass:
      "pr-[110px] rounded-l-full lg:pr-[250px] cursor-pointer transition-all duration-1000",
  },
  {
    id: "branding-services",
    title: "Branding Services",
    text: "Establish a powerful and memorable brand identity that resonates with your audience and stands out in a crowded marketplace.",
    iconSrc: "https://dodeal.com/assets/images/svg/s-branding.svg",
    wrapperClass:
      "relative pr-[60px] rounded-l-full lg:pr-[150px] cursor-pointer transition-all duration-1000",
  },
];

const contentVariants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10 },
};

const ServiceItem = React.forwardRef(
  ({ service, isActive, onClick }: any, ref: any) => {
    return (
      <motion.div
        ref={ref}
        layout
        className={service.wrapperClass}
        style={{
          background: isActive ? "rgba(0, 174, 107, 0.2)" : "transparent",
          border: isActive ? `2px solid ${COLOR_PRIMARY}` : "none",
          zIndex: isActive ? 10 : 1,
          transition: "none",
        }}
        onClick={() => onClick(service.id)}
      >
        <div
          className={`relative w-full flex items-center px-4 py-3 justify-center gap-4 ${
            isActive ? "" : "opacity-50"
          }`}
        >
          <motion.img
            alt="DODEAL SERVICES"
            loading="lazy"
            width={isActive ? 50 : 80}
            height={isActive ? 50 : 30}
            decoding="async"
            data-nimg="1"
            className={
              isActive
                ? "w-[10px] h-[30px] lg:w-[50px] lg:h-[50px]"
                : "w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
            }
            src={service.iconSrc}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <motion.h2
            className={`font-semibold ${
              isActive ? "text-base lg:text-3xl 2xl:text-xl font-semibold" : ""
            }`}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {service.title}
          </motion.h2>
        </div>
      </motion.div>
    );
  }
);
ServiceItem.displayName = "ServiceItem";

export default function ServiceNavigator() {
  const [activeServiceId, setActiveServiceId] = useState("seo-sem");
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activeService =
    servicesData.find((s) => s.id === activeServiceId) || servicesData[2];

  const handleClick = (id: string) => {
    setActiveServiceId(id);
  };

  useEffect(() => {
    const activeEl = itemRefs.current[activeServiceId];
    if (activeEl && containerRef.current) {
      const container = containerRef.current;
      const targetScroll =
        activeEl.offsetTop -
        container.offsetHeight / 2 +
        activeEl.offsetHeight / 2;
      container.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  }, [activeServiceId]);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-transparent text-white overflow-hidden">
        <div className="w-full flex items-center justify-start p-6 lg:p-12 order-0 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="max-w-xl text-center lg:text-left"
            >
              <h2 className="text-lg lg:text-[32px] 2xl:text-xl font-700 leading-relaxed font-bold mb-4">
                <span style={{ color: COLOR_PRIMARY }}>
                  {activeService.title}
                </span>
              </h2>
              <p className="text-sm lg:text-[20px] leading-relaxed text-gray-300 mb-6">
                {activeService.text}
              </p>
              <a
                href="/marketing-services"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white text-[20px] font-medium transition-all hover:scale-105"
                style={{
                  background: BUTTON_BG,
                  border: `1px solid ${COLOR_BUTTON_BORDER}`,
                  boxShadow: COLOR_BUTTON_SHADOW,
                }}
              >
                See More
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1956 10.0911C13.6262 10.9705 14.709 11.2158 15.5945 10.7975L21.7443 7.89204C23.2319 7.0632 23.2306 4.9228 21.7419 4.09568L15.6001 1.19485C14.7119 0.775328 13.6261 1.02386 13.1962 1.90707C12.5813 3.17039 12.2717 4.58271 12.2701 5.99484"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 5.99487H12.0383"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative flex items-center justify-end order-1 lg:order-2">
          <div
            ref={containerRef}
            className="h-[400px] lg:h-screen w-full overflow-y-auto overflow-x-hidden scrollbar-hide"
          >
            <motion.div
              layout
              transition={spring}
              className="absolute h-full w-full flex flex-col items-end mt-5 md:mt-54 gap-5 py-[5px] lg:py-[100px] px-0"
            >
              {servicesData.map((service) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  isActive={service.id === activeServiceId}
                  onClick={handleClick}
                  ref={(el: HTMLDivElement | null) => {
                    itemRefs.current[service.id] = el;
                  }}
                />
              ))}
            </motion.div>
          </div>

          <div
            className="absolute top-1/2 right-[250px] lg:right-[-400px] w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] rounded-full -translate-y-1/2 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${COLOR_PRIMARY}80 0%, ${COLOR_PRIMARY}00 70%)`,
            }}
          />
          <div
            className="absolute top-1/2 right-[-200px] lg:right-[-400px] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full border-8 -translate-y-1/2 pointer-events-none z-10"
            style={{
              background: COLOR_SECONDARY,
              borderColor: COLOR_GREEN_300,
            }}
          />
        </div>
      </div>
    </>
  );
}
