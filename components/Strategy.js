"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Strategy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("strategy");
  const [showDropdown, setShowDropdown] = useState(false);
  const [openTabs, setOpenTabs] = useState({
    features: false,
    strategy: false,
    managed: false,
  });

  // Toggle function
  const toggleTab = (id) => {
    setOpenTabs((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const tabs = [
    { id: "features", label: "Key Features Of Our Services" },
    { id: "strategy", label: "Strategy" },
    { id: "managed", label: "Managed Services" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section
      id="strategy"
      ref={sectionRef}
      className="pt-10 section-padding pb-0 bg-gray-50"
    >
      <div className="">
        {/* Header */}
        <div className="text-center gap-[30px] flex flex-col mb-16 p-3 sm:px-16 ">
          <div className="flex flex-wrap w-full items-center justify-center gap-4">
            <div className=" md:w-8 md:h-[62px] sm:w-12 w-4 h-10 relative">
              <Image
                src="/strategy.png"
                alt="hero"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#2D53A4] mb-6">
              Strategy And Transformation
            </h2>
            <div className="md:w-8 md:h-[62px] sm:w-12 w-4 h-10 relative">
              <Image
                src="/strategy.png"
                alt="hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <p className="text-sm  md:text-lg text-gray-600 max-w-4xl text-justify mx-auto leading-relaxed">
            At 1IGS, we specialize in procurement strategy and transformation,
            helping businesses tackle complex supply chain challenges with
            innovative, sustainable solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full py-10 p-3 md:px-16 bg-[#eff7fe]">
          {/* Mobile Tabs - Accordion Style */}
          <div className="sm:hidden space-y-4">
            {tabs.map((tab) => (
              <div key={tab.id} className="bg-white border rounded shadow">
                <button
                  onClick={() => toggleTab(tab.id)}
                  className="flex justify-between text-sm items-center transition-all duration-300 ease-in-out w-full text-left bg-[#2d4c92] text-white sm:text-base px-4 py-3"
                >
                  {tab.label}
                  {openTabs[tab.id] ? (
                    <MdKeyboardArrowUp className="sm:text-xl" />
                  ) : (
                    <MdKeyboardArrowDown className="sm:text-xl" />
                  )}
                </button>

                {/* ✅ Animated Accordion Content */}
                <div
                  className={`px-4 text-gray-800 text-sm leading-relaxed bg-[#eff7fe] text-justify overflow-hidden transition-all duration-500 ease-in-out ${
                    openTabs[tab.id]
                      ? "max-h-[1000px] py-4 opacity-100"
                      : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  {tab.id === "features" && (
                    <>
                      <p className="mb-4">
                        Tailored one-stop shop solutions that fit your
                        business—1IGS’s comprehensive all-in-one services...
                      </p>
                      <p className="mb-8">
                        We are not just consultants—we are collaborators...
                      </p>
                      {[
                        "Procurement Strategy",
                        "Transformation Solutions",
                        "Collaborative Approach",
                      ].map((title, i) => (
                        <div key={i} className="mb-4">
                          <h2 className="text-[#2D53A4] text-lg font-bold mb-2">
                            {title}
                          </h2>
                          <p className="text-[#393939]">
                            {
                              [
                                "We bring your teams into the process...",
                                "Unlock hidden opportunities...",
                                "Implement sustainable frameworks...",
                              ][i]
                            }
                          </p>
                        </div>
                      ))}
                    </>
                  )}

                  {tab.id === "strategy" && (
                    <>
                      <p className="mb-4">
                        1IGS is transforming what procurement and supply chain
                        teams can achieve...
                      </p>
                      {[1, 2].map((_, i) => (
                        <div key={i} className="mb-4">
                          <h2 className="text-[#2D53A4] text-lg font-bold mb-2">
                            Build a Resilient Supply Chain With 1IGS
                          </h2>
                          <p className="text-[#393939] mb-2">
                            At 1IGS, we specialize in efficient procurement
                            outsourcing...
                          </p>
                          <div className="text-[#F06230] flex items-center text-sm font-medium">
                            {i === 0
                              ? "Optimize Your Supply Chain Today"
                              : "Be ready for tomorrow’s challenges today"}
                            <span className="ml-2">
                              <MdKeyboardDoubleArrowRight />
                            </span>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {tab.id === "managed" && (
                    <>
                      <p className="mb-4">
                        1IGS delivers tailored managed services to help your
                        business...
                      </p>
                      {[1, 2].map((_, i) => (
                        <div key={i} className="mb-4">
                          <h2 className="text-[#2D53A4] text-lg font-bold mb-2">
                            {i === 0
                              ? "Procurement Outsourcing"
                              : "Supply Chain Outsourcing"}
                          </h2>
                          <p className="text-[#393939] mb-2">
                            {i === 0
                              ? "Optimize procurement and cut costs with 1IGS..."
                              : "Optimize your supply chain with 1IG’s flexible outsourcing..."}
                          </p>
                          <div className="text-[#F06230] flex items-center text-sm font-medium">
                            {i === 0
                              ? "Get a Free Consultation Today"
                              : "Transform Your Supply Chain Now"}
                            <span className="ml-2">
                              <MdKeyboardDoubleArrowRight />
                            </span>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden sm:flex flex-wrap justify-center border-b-2 border-[#2d4c92] relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm lg:text-base  font-bold py-2 mx-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-[#2d4c92] text-white rounded-t-md -mb-[2px] ${
                        tab.id === "strategy" ? "px-8" : "px-4"
                      }`
                    : "text-[#1c1c1c] px-4"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 mx-auto text-gray-800 text-sm sm:text-[17px] md:text-[20px] leading-relaxed text-justify max-w-5xl">
            {activeTab === "features" && (
              <>
                <p className="mb-4">
                  Tailored one-stop shop solutions that fit your business—1IGS’s
                  comprehensive all-in-one services deliver exactly what you
                  need to overcome complex operational challenges and drive
                  growth.
                </p>
                <p className="mb-8">
                  We are not just consultants—we are collaborators. We co-create
                  cross-functional transformation programs that deliver
                  long-term value and measurable results.
                </p>
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                  {[
                    "Procurement Strategy",
                    "Transformation Solutions",
                    "Collaborative Approach",
                  ].map((title, i) => (
                    <div key={i} className="flex-1">
                      <h2 className="text-[#2D53A4] text-xl md:text-[28px] font-bold mb-4">
                        {title}
                      </h2>
                      <p className="text-[#393939] text-sm md:text-base mb-4">
                        {
                          [
                            "We bring your teams into the process, ensuring actionable outcomes and shared success.",
                            "Unlock hidden opportunities to optimize your procurement processes.",
                            "Implement sustainable frameworks to future-proof your supply chain.",
                          ][i]
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {activeTab === "strategy" && (
              <>
                <p className="mb-4">
                  1IGS is transforming what procurement and supply chain teams
                  can achieve...
                </p>
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                  {[1, 2].map((_, i) => (
                    <div key={i} className="flex-1">
                      <h2 className="text-[#2D53A4] text-xl tracking-tight md:text-[28px] font-bold mb-4">
                        Build a Resilient Supply Chain With 1IGS
                      </h2>
                      <p className="text-[#393939] text-sm md:text-base mb-4">
                        At 1IGS, we specialize in efficient procurement
                        outsourcing...
                      </p>
                      <div className="text-[#F06230] flex items-center text-sm font-medium">
                        {i === 0
                          ? "Optimize Your Supply Chain Today"
                          : "Be ready for tomorrow’s challenges today"}{" "}
                        <span className="ml-2">
                          <MdKeyboardDoubleArrowRight />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {activeTab === "managed" && (
              <>
                <p className="mb-4">
                  1IGS delivers tailored managed services to help your
                  business...
                </p>
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                  {[1, 2].map((_, i) => (
                    <div key={i} className="flex-1">
                      <h2 className="text-[#2D53A4] text-xl md:text-[28px] font-bold mb-4">
                        {i === 0
                          ? "Procurement Outsourcing"
                          : "Supply Chain Outsourcing"}
                      </h2>
                      <p className="text-[#393939] text-sm md:text-base mb-4">
                        {i === 0
                          ? "Optimize procurement and cut costs with 1IGS..."
                          : "Optimize your supply chain with 1IG’s flexible outsourcing..."}
                      </p>
                      <div className="text-[#F06230] flex items-center text-sm font-medium">
                        {i === 0
                          ? "Get a Free Consultation Today"
                          : "Transform Your Supply Chain Now"}{" "}
                        <span className="ml-2">
                          <MdKeyboardDoubleArrowRight />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
