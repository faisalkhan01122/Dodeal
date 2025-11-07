import React from "react";
import Navbar from "./Navbar";
import video from "../assets/videos/herosectio.mp4";
import gif from "../assets/videos/button-hover.gif";
const HeroSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/dodealagency/",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61569889287329",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dodeal.agency",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.5 339 255.9 287.7 141 224.1 141zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@dodeal.agency",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
        </svg>
      ),
    },
    {
      name: "Snapchat",
      href: "https://web.snapchat.com/?ref=homepage_auto_redirect",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z"></path>
        </svg>
      ),
    },
  ];
  return (
    <>
      <section
        className=" min-h-screen w-full text-white overflow-hidden"
        style={{ fontFamily: "'Effra Trial', sans-serif" }}
      >
        {/* 🔹 Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain md:object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {/* 🔹 Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* 🔹 Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold leading-snug tracking-wide mt-48 mb-12">
            DO MORE <span className="text-green-500">DEALS</span> WITH
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-[20px] font-normal max-w-xs sm:max-w-xl md:max-w-3xl leading-relaxed mt-32 md:mt-54">
            From strategy to execution, we help you unlock opportunities and
            exceed expectations — do more with every deal.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-24 md:pt-56">
          <div className="relative inline-block group">
            <img
              src={gif}
              alt="glow"
              className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 
      opacity-0 group-hover:opacity-100`}
            />
            <button
              className="relative z-10 px-24 py-3 border-2 border-[rgba(0,174,107,0.6)] rounded-full text-white text-lg font-semibold bg-[rgba(0, 174, 107, 0.2)] hover:border-[rgba(0, 174, 107, 0.2)] transition-all duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,174,107,0.74) 0%, rgba(0,174,107,0.7) 100%)",
                boxShadow:
                  "0 0 20px rgba(255, 255, 255, 0.54), 0 0 40px rgba(2, 35, 52, 1)",
              }}
            >
              Contact Now
            </button>
          </div>

          {/* 🔹 Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {socialLinks.map((icon) => (
              <div
                key={icon.name}
                className="relative group rounded-[77.02px] p-3 border-[0.68px] p-t-[5.45px] p-r-[6.82px] p-l-[6.82px] p-b-[5.45px] border-[rgba(192, 218, 208, 1)] shadow-sm hover:bg-[rgba(0,174,107,1)] transition-colors"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.href}
                  className="flex items-center justify-center"
                >
                  {icon.svg}
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] hidden group-hover:block bg-slate-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 whitespace-nowrap z-10 shadow-lg">
                  {icon.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
