import React from "react";
import { Play, MessageCircle } from "lucide-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { GiFlowerPot } from "react-icons/gi";
import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="min-h-screen bg-[url('/WhyUs-bg.png')]  px-14 bg-cover bg-center bg-no-repeat w-full  ">
      {/* Header Section */}
      <div className=" px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[32px] font-bold text-[#2460b4] mb-4">
            Unmatched Expertise and a Global Network in Sourcing and Supply
            Chain Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-justify ">
            With over 26 years of proven experience and a powerful network, we
            deliver intelligent, efficient supply chain and sourcing solutions
            that redefine success.
          </p>
          <p className="text-lg text-gray-600 mb-6 text-justify">
            Spend less time worrying about procurement and more time scaling
            your business. Our end-to-end solutions save you time and resources.
          </p>
          <button className=" hover:bg-[#2460b4] text-[#2460b4] text-lg hover:text-white px-6 py-3 rounded border border-[#2460b4]  transition-colors">
            <span className="flex items-center">
              REIMAGINE YOUR BUSINESS WITH IIGS{" "}
              <span className="ml-2">
                <MdKeyboardDoubleArrowRight />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Why IIGS & What We Do Section */}
      <div className=" px-6 py-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Why IIGS */}
          <div className="bg-[#eff7fe] w-full transition-all duration-700 transform hover:scale-105 p-8 rounded-lg shadow-sm">
            <h2 className="text-[49px] text-[#2460b4] font-bold mb-2">
              Why <span className="text-[#F06230]">IIGS</span>?
            </h2>
            <h3 className="text-2xl font-semibold text-[#2460b4] mb-4">
              Reinventing Possibilities with IIGS
            </h3>
            <p className="text-gray-600 text-[20px] mb-6 leading-relaxed">
              
                At IIGS, we transform more than supply chains—we redefine
                industries. Together, we&rsquo;ve reshaped the procurement
                strategies behind the special effects that amaze, the stadiums
                that unite, the food we share, the clothes we wear, the cars we
                drive, and even the holidays we cherish. With IIGS, reinvention
                isn&rsquo;t just possible; it&rsquo;s inevitable.
              
            </p>
            <p className="text-gray-600 mb-6 text-[20px] leading-relaxed">
              Efficiency, precision, and exceptional outcomes&mdash;that&rsquo;s
              the IIGS promise.
            </p>
            <button className="text-[#2460b4] items-center flex text-[20px] hover:text-blue-700 font-semibold transition-colors">
              PARTNER WITH US TODAY{" "}
              <span className="ml-2">
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
          </div>

          {/* What We Do */}
          <div className="bg-[#eff7fe] w-full transition-all duration-700 transform hover:scale-105 p-8 rounded-lg shadow-sm">
            <h2 className="text-[49px] text-[#2460b4] font-bold mb-2">
              What <span className="text-[#F06230]">We Do</span>
            </h2>
            <h3 className="text-2xl font-semibold text-[#2460b4] mb-4">
              Procurement Strategy and Transformation
            </h3>
            <p className="text-gray-600 mb-6 text-[20px] leading-relaxed">
              We specialize in procurement transformation, helping businesses
              streamline processes, drive efficiency, and uncover hidden value
              even within the most challenging environments for long-term
              success.
            </p>
            <p className="text-gray-600 mb-6 text-[20px] leading-relaxed">
              Call us today and discover how IIGS can redefine your supply chain
              and fuel your business growth.
            </p>
            <button className="text-[#2460b4] flex items-center text-[20px] hover:text-blue-700 font-semibold transition-colors">
              DISCOVER IIGS TODAY{" "}
              <span className="ml-2">
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive Services Section */}
      <div className=" w-full py-16">
        <div className="w-full ">
          <div className="flex items-center h-[74.5px] w-full mb-12">
            <div className="text-[#2D53A4] h-[74.5px] w-[74.5px] mr-4">
              <TbWorldSearch className="w-full h-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2460b4]">
                Comprehensive Procurement
              </h2>
              <h3 className="text-2xl font-bold text-[#F06230]">
                and Supply Chain Services
              </h3>
            </div>
          </div>
          <div className="w-full px-6 py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: 4 Cards in 2x2 layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div
                  className="relative h-[250px] transition-all duration-700 transform hover:scale-105 bg-cover bg-center overflow-hidden group cursor-pointer "
                  style={{ backgroundImage: "url('/supplier1.png')" }}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-brightness-[60%] z-0"></div>
                  <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
                    <h4 className="text-base font-semibold">
                      Find the best suppliers, negotiate competitive terms, and
                      secure high-quality materials.
                    </h4>
                    <div className="text-[#F06230] font-semibold text-sm">
                      Supplier Management
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="relative h-[250px] transition-all duration-700 transform hover:scale-105 bg-cover bg-center overflow-hidden group cursor-pointer "
                  style={{ backgroundImage: "url('/supplier2.png')" }}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-brightness-[60%] z-0"></div>
                  <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
                    <h4 className="text-base font-semibold">
                      Keep track of stock levels, avoid overages, and guarantee
                      just-in-time delivery.
                    </h4>
                    <div className="text-[#F06230] font-semibold text-sm">
                      Inventory Management
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  className="relative h-[250px] transition-all duration-700 transform hover:scale-105 bg-cover bg-center overflow-hidden group cursor-pointer "
                  style={{ backgroundImage: "url('/supplier3.png')" }}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-brightness-[60%] z-0"></div>
                  <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
                    <h4 className="text-base font-semibold">
                      Build and maintain strong supplier relationships for
                      seamless collaboration.
                    </h4>
                    <div className="text-[#F06230] font-semibold text-sm">
                      Supplier Relationship Management
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div
                  className="relative h-[250px] transition-all duration-700 transform hover:scale-105 bg-cover bg-center overflow-hidden group cursor-pointer "
                  style={{ backgroundImage: "url('/supplier4.png')" }}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-brightness-[60%] z-0"></div>
                  <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
                    <h4 className="text-base font-semibold">
                      Mitigate disruptions with proactive risk assessments and
                      contingency planning.
                    </h4>
                    <div className="text-[#F06230] font-semibold text-sm">
                      Risk Management
                    </div>
                  </div>
                </div>
              </div>
              {/* RIGHT VIDEO SECTION */}
              <div className="relative p-2 text-center justify-center items-center py-24 my-auto bg-[#2D53A4] h-full w-full overflow-hidden">
                <Image
                  src="/computer.png"
                  alt="Step"
                  width={845}
                  height={563}
                  className="object-cover "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-[#2460b4] hover:bg-[#7993b8f0] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
