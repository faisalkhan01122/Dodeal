import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import { Menu, X } from "lucide-react";
import gif from "../assets/videos/button-hover.gif";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Cases", link: "#" },
    { name: "Latest", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{ fontFamily: "'Effra Trial', sans-serif" }}
    >
      <nav
        className={`flex justify-between items-center px-[6%] py-4 transition-all duration-500 border-b border-[rgba(2,35,52,1)] ${
          isScrolled
            ? "backdrop-blur-[21.6px] bg-transparent"
            : "backdrop-blur-[10.6px] bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#">
          <img
            src={logo}
            alt="DODEAL"
            className="h-[40px] md:h-[48px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8 px-8 py-3 rounded-full border border-[rgba(255,255,255,0.15)] bg-transparent backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              onClick={() => setActiveLink(link.name)}
              className={`relative text-[17px] font-semibold transition-all duration-300 group ${
                activeLink === link.name
                  ? "text-[rgba(0,174,107,1)]"
                  : "text-[#A8B3B0] hover:text-[rgba(0,174,107,1)]"
              }`}
            >
              {link.name}
              {/* Gradient Underline (like the image: multi-color glow) */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-500 ease-out pointer-events-none ${
                  activeLink === link.name
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(0,174,107,1) 20%, rgba(192,218,208,1) 50%, rgba(0,174,107,1) 80%, transparent 100%)",
                  boxShadow:
                    activeLink === link.name || "group-hover"
                      ? "0 0 8px rgba(0,174,107,0.6), 0 0 12px rgba(192,218,208,0.4)"
                      : "none",
                  filter: "blur(0.5px)",
                }}
              ></span>
              {/* Subtle glow extension for hover/active */}
              <span
                className={`absolute bottom-[-2px] left-1/2 -translate-x-1/2 h-[1px] rounded-full transition-all duration-500 ease-out opacity-0 group-hover:opacity-60 ${
                  activeLink === link.name ? "opacity-60" : ""
                }`}
                style={{
                  width: activeLink === link.name ? "120%" : "0",
                  background: "rgba(192,218,208,0.6)",
                  boxShadow: "0 0 10px rgba(192,218,208,0.5)",
                  filter: "blur(1px)",
                }}
              ></span>
            </a>
          ))}
        </div>

        {/* Desktop: Get In Touch Button */}
        <div className="hidden lg:block relative rounded-full overflow-hidden">
          <img
            src={gif}
            alt="glow"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              buttonHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          <button
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            className="relative z-10 px-8 py-3 rounded-full cursor-pointer font-semibold text-[17px] text-white border border-[rgba(192,218,208,0.4)] transition-all duration-500"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,174,107,0.74) 0%, rgba(0,174,107,0.7) 100%)",
              boxShadow:
                "0 0 20px rgba(255, 255, 255, 0.54), 0 0 40px rgba(2, 35, 52, 1)",
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-3 bg-[#011a26]/90 rounded-xl border border-white/10 backdrop-blur-md p-4 mx-[6%] mb-4">
          <ul className="flex flex-col gap-4 font-semibold text-[18px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMenuOpen(false);
                  }}
                  className={`block transition-all duration-300 relative pb-1 ${
                    activeLink === link.name
                      ? "text-[rgba(0,174,107,1)]"
                      : "text-[#bbb] hover:text-[rgba(0,174,107,1)]"
                  }`}
                >
                  {link.name}
                  {/* Mobile underline (same gradient style, but simpler for touch) */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${
                      activeLink === link.name ? "w-full" : "w-0 hover:w-full"
                    }`}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(0,174,107,1) 30%, rgba(192,218,208,1) 50%, rgba(0,174,107,1) 70%, transparent 100%)",
                      boxShadow: "0 0 6px rgba(0,174,107,0.5)",
                    }}
                  ></span>
                </a>
              </li>
            ))}

            {/* Mobile: Get In Touch Button */}
            <li className="mt-4">
              <div className="relative rounded-full overflow-hidden inline-block w-full">
                <img
                  src={gif}
                  alt="glow"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    buttonHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
                <button
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                  onTouchStart={() => setButtonHovered(true)}
                  onTouchEnd={() => setButtonHovered(false)}
                  className="relative z-10 w-full px-6 py-3 rounded-full font-semibold text-[17px] text-white border border-[rgba(192,218,208,0.4)] transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,174,107,0.74) 0%, rgba(0,174,107,0.7) 100%)",
                    boxShadow:
                      "0 0 20px rgba(255, 255, 255, 0.54), 0 0 40px rgba(2, 35, 52, 1)",
                  }}
                >
                  Get In Touch
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
