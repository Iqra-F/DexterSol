import React from "react";
import { Play, MessageCircle } from "lucide-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="min-h-screen bg-[url('/WhyUs-bg.png')] px-4 sm:px-6 md:px-10 xl:px-14 bg-cover bg-center bg-no-repeat w-full">
      {/* Header Section */}
      <div className="px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#2460b4] mb-4">
            Unmatched Expertise and a Global Network in Sourcing and Supply
            Chain Solutions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 text-justify">
            With over 26 years of proven experience and a powerful network, we
            deliver intelligent, efficient supply chain and sourcing solutions
            that redefine success.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-6 text-justify">
            Spend less time worrying about procurement and more time scaling
            your business. Our end-to-end solutions save you time and resources.
          </p>
          <button className="hover:bg-[#2460b4] text-[#2460b4] text-sm sm:text-base md:text-lg hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded border border-[#2460b4] transition-colors">
            <span className="flex items-center justify-center">
              REIMAGINE YOUR BUSINESS WITH IIGS{" "}
              <span className="ml-2">
                <MdKeyboardDoubleArrowRight />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Why IIGS & What We Do Section */}
      <div className="px-4 sm:px-6 py-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Why IIGS */}
          <div className="bg-[#eff7fe] w-full transition-all duration-700 transform hover:scale-105 p-2 sm:p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-3xl sm:text-[36px] md:text-[49px] text-[#2460b4] font-bold mb-2">
              Why <span className="text-[#F06230]">IIGS</span>?
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#2460b4] mb-4">
              Reinventing Possibilities with IIGS
            </h3>
            <p className="text-gray-600 text-base sm:text-[18px] md:text-[20px] mb-6 leading-relaxed">
              At IIGS, we transform more than supply chains—we redefine
              industries. Together, we’ve reshaped the procurement strategies
              behind the special effects that amaze, the stadiums that unite,
              the food we share, the clothes we wear, the cars we drive, and
              even the holidays we cherish. With IIGS, reinvention isn’t just
              possible; it’s inevitable.
            </p>
            <p className="text-gray-600 mb-6 text-base sm:text-[18px] md:text-[20px] leading-relaxed">
              Efficiency, precision, and exceptional outcomes—that’s the IIGS
              promise.
            </p>
            <button className="text-[#2460b4] flex items-center text-base sm:text-[18px] md:text-[20px] hover:text-blue-700 font-semibold transition-colors">
              PARTNER WITH US TODAY{" "}
              <span className="ml-2">
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
          </div>

          {/* What We Do */}
          <div className="bg-[#eff7fe] w-full transition-all duration-700 transform hover:scale-105 p-2 sm:p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-3xl sm:text-[36px] md:text-[49px] text-[#2460b4] font-bold mb-2">
              What <span className="text-[#F06230]">We Do</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#2460b4] mb-4">
              Procurement Strategy and Transformation
            </h3>
            <p className="text-gray-600 mb-6 text-base sm:text-[18px] md:text-[20px] leading-relaxed">
              We specialize in procurement transformation, helping businesses
              streamline processes, drive efficiency, and uncover hidden value
              even within the most challenging environments for long-term
              success.
            </p>
            <p className="text-gray-600 mb-6 text-base sm:text-[18px] md:text-[20px] leading-relaxed">
              Call us today and discover how IIGS can redefine your supply chain
              and fuel your business growth.
            </p>
            <button className="text-[#2460b4] flex items-center text-base sm:text-[18px] md:text-[20px] hover:text-blue-700 font-semibold transition-colors">
              DISCOVER IIGS TODAY{" "}
              <span className="ml-2">
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive Services Section */}
      <div className="w-full py-12 sm:py-16">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center h-auto sm:h-[74.5px] w-full mb-6 sm:mb-12 px-4 sm:px-0">
            <div className="text-[#2D53A4] h-16 w-16 sm:h-[74.5px] sm:w-[74.5px] mr-0 sm:mr-4 mb-2 sm:mb-0">
              <TbWorldSearch className="w-full h-full" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-[#2460b4]">
                Comprehensive Procurement
              </h2>
              <h3 className="text-lg sm:text-2xl font-bold text-[#F06230]">
                and Supply Chain Services
              </h3>
            </div>
          </div>

          <div className="w-full px-4 sm:px-6 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* 4 Service Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    img: "/supplier1.png",
                    title:
                      "Find the best suppliers, negotiate competitive terms, and secure high-quality materials.",
                    subtitle: "Supplier Management",
                  },
                  {
                    img: "/supplier2.png",
                    title:
                      "Keep track of stock levels, avoid overages, and guarantee just-in-time delivery.",
                    subtitle: "Inventory Management",
                  },
                  {
                    img: "/supplier3.png",
                    title:
                      "Build and maintain strong supplier relationships for seamless collaboration.",
                    subtitle: "Supplier Relationship Management",
                  },
                  {
                    img: "/supplier4.png",
                    title:
                      "Mitigate disruptions with proactive risk assessments and contingency planning.",
                    subtitle: "Risk Management",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="relative h-[250px] transition-all duration-700 transform hover:scale-105 bg-cover bg-center overflow-hidden group cursor-pointer"
                    style={{ backgroundImage: `url('${card.img}')` }}
                  >
                    <div className="absolute inset-0 bg-black/20 backdrop-brightness-[60%] z-0"></div>
                    <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
                      <h4 className="text-sm sm:text-base font-semibold">
                        {card.title}
                      </h4>
                      <div className="text-[#F06230] font-semibold text-sm">
                        {card.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Video/Image Section */}
              <div className="relative p-2 text-center justify-center items-center py-12 sm:py-24 my-auto bg-[#2D53A4] h-full w-full overflow-hidden">
                <Image
                  src="/computer.png"
                  alt="Step"
                  width={700}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <div className="bg-[#2460b4] hover:bg-[#7993b8f0] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
