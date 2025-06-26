"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { IoCaretForwardOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import StarCanvas from "./StarCanvas";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null); // ⭐️ Added hero section reference

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        id="home"
        className="relative bg-gradient-to-br from-[#040a13] to-[#043739] p-3 sm:px-16 pb-4 mx-auto pt-64 items-center w-full overflow-hidden"
      >
        {/* Glowing stars */}
        <StarCanvas parentRef={heroRef} />

        {/* Content */}
        <div className="relative z-10">
          <div
            className={`text-white  md:justify-start justify-center flex flex-col py-10 gap-[35px] duration-1000 w-full`}
          >
            <h1 className="text-3xl md:text-3xl lg:text-[40px] font-semibold tracking-tighter">
              Global Impact, Expertly Delivered
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Fresh perspective to consistently innovative
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <button className="bg-[#F36434] flex gap-2 items-center justify-center rounded-lg font-bold text-sm sm:text-base px-[13px] py-[16px]">
                CONTACT OUR EXPERTS <IoCaretForwardOutline />
              </button>
              <button className="font-bold text-base sm:text-lg p-[13px]">
                BOOK A MEETING
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="absolute -right-8 sm:-right-20 md:-right-32 md:top-1  h-full w-1/2">
            <Image
              src="/dextersol-hero2.png"
              alt="hero"
              height={724}
              width={1016}
              className="object-contain scale-x-[-1]"
              priority
            />
          </div>

          {/* Boxes */}
          <p className="sm:text-[20px]  mt-10 w-full text-white">
            Seamless Solutions, Endless Possibilities
          </p>
          <div className="max-w-7xl mx-auto grid grid-cols-1 z-20 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <h2 className="text-white text-lg sm:text-[24px] font-semibold mb-4">
                  Humble, collaborative and passionate
                </h2>
                <p className="text-white text-base sm:text-[18px] mb-4">
                  We don’t work from the outside looking in. At 1IGS, we
                  co-create solutions with our clients, ensuring strategies are
                  aligned with their goals and operational realities.
                </p>
                <div className="text-[#F06230] flex items-center text-base sm:text-[18px] font-medium">
                  Let&apos;s Co-Create{" "}
                  <span className="ml-2">
                    <MdKeyboardDoubleArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
