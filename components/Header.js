"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { PiGlobeLight } from "react-icons/pi";
import { IoCaretDownOutline } from "react-icons/io5";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Company " },
    { name: "Solutions" },
    { name: "Industries" },
    { name: "Careers" },
    { name: "Partners" },
  ];

  return (
    <header
      className={`fixed w-full h-[135px] sm:h-[155px] z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : " bg-[#010305]"
      }`}
    >
      {/* 🔵 Blue Top Bar */}
      <div className="bg-[#2d53a4] text-white text-xs sm:text-sm md:text-base flex space-x-4 px-4 sm:px-6 h-10 items-center">
        <div>
          <FiSearch />
        </div>
        <div>
          <BiPhone />
        </div>
        <div className="flex items-center">
          <PiGlobeLight />{" "}
          <span className="text-[9px]">
            <IoCaretDownOutline />
          </span>
        </div>
      </div>

      {/* 🔽 Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* 🔷 Logo */}
          <div className="flex items-center">
            <div className="md:w-[204px] md:h-[50px]  sm:w-[150px] sm:h-[35px] w-[60px] h-[20px] mr-1 sm:mr-2 relative rounded-lg overflow-hidden">
              <Image
                src="/igs-logo.png"
                alt="IGS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div
              className={`h-[50px] w-[1px] ${
                isScrolled ? "bg-[#010305]" : "  bg-white/95"
              }`}
            ></div>
            <div className="flex flex-col text-xs sm:text-base md:text-lg ml-1 ">
              <span
                className={`sm:text-sm text-[10px]  ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                RESHAPING
              </span>
              <span
                className={`sm:text-sm text-[10px] ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                PROCUREMENT
              </span>
              <span
                className={`sm:text-sm text-[10px] ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                THROUGH INNOVATION
              </span>
            </div>
          </div>

          {/* 🌐 Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            {navigation.map((item) => (
              <span
                key={item.name}
                className={`font-medium transition duration-200 text-[12px] flex items-center hover:text-blue-600 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}{" "}
                <span className="text-[10px] ml-1">
                  <IoCaretDownOutline />
                </span>
              </span>
            ))}
            <button
              className={`text-xl ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <GiHamburgerMenu />
            </button>
          </div>

          {/* 📱 Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 📱 Mobile Dropdown Nav */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 bg-black text-white rounded-lg shadow-lg">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm hover:text-blue-50 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* 🔵 Blue bottom Bar */}

      <div
        className={`${
          isScrolled ? "text-gray-900" : "text-white"
        } text-xs sm:text-sm font-bold space-x-3 flex flex-wrap justify-start px-1 sm:px-6 h-8 sm:h-10 items-center`}
      >
        <div className="text-[#2460b4] text-[7px] sm:text-sm md:text-lg flex items-center">
          <span className="text-[#d2562b] mr-1">1IGS </span> STRATEGY{" "}
          <span className="text-[10px] ml-1  text-white ">
            <IoCaretDownOutline />
          </span>
        </div>
        <div className="text-[#2460b4] text-[7px] sm:text-sm md:text-lg flex items-center">
          <span className="text-[#d2562b] mr-1">1IGS </span> Products{" "}
          <span className="text-[10px] ml-1 text-white">
            <IoCaretDownOutline />
          </span>
        </div>
        <div className="text-[#2460b4] text-[7px] sm:text-sm md:text-lg flex items-center">
          <span className="text-[#d2562b] mr-1">1IGS </span> Managed services{" "}
          <span className="text-[10px] ml-1 text-white">
            <IoCaretDownOutline />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
