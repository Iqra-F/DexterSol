"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Strategy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("strategy");

  const tabs = [
    { id: "features", label: "Key Features Of Our Services" },
    { id: "strategy", label: "   Strategy   " },
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
    <section id="strategy" ref={sectionRef} className="pt-10 bg-gray-50">
      <div className="">
        {/* Header */}
        <div className="text-center gap-[30px] flex flex-col mb-16 px-4 md:px-0">
          <div className="flex flex-wrap w-full items-center justify-center gap-4">
            <div className="h-[62px] w-12 relative">
              <Image
                src="/strategy.png"
                alt="hero"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="text-sm sm:text-xl md:text-[54px] font-bold text-[#2D53A4] mb-6">
              Strategy And Transformation
            </h2>
            <div className="h-[62px] w-12 relative">
              <Image
                src="/strategy.png"
                alt="hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl text-justify mx-auto leading-relaxed">
            At 1IGS, we specialize in procurement strategy and transformation,
            helping businesses tackle complex supply chain challenges with
            innovative, sustainable solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full py-10 px-4 md:px-20 bg-[#eff7fe]">
          <div className="flex flex-wrap justify-center border-b-4 border-[#2d4c92] relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm md:text-base font-bold py-2 mx-2  transition-all duration-300
                  ${
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
          <div className="mt-6 text-center mx-auto text-gray-800 text-sm sm:text-[17px] md:text-[20px] leading-relaxed">
            {activeTab === "features" && (
              <>
                <p className="mb-4 text-justify max-w-4xl mx-auto">
                 Tailored one-stop shop solutions that fit your business—1IGS&rsquo;s
  comprehensive all-in-one services deliver exactly what you
  need to overcome complex operational challenges and drive
  growth..
                </p>
                <p className="mb-4 text-justify max-w-4xl mx-auto">
                  We are not just consultants—we are collaborators. We co-create
                  cross-functional transformation programs that deliver
                  long-term value and measurable results.
                </p>
                <div className="flex flex-col lg:flex-row justify-between gap-10 items-start text-start">
                  {/* Card 1 */}
                  <div className="flex-1">
                    <h2 className="text-[#2D53A4] text-2xl md:text-[32px] font-bold mb-4">
                      Procurement Strategy
                    </h2>
                    <p className="text-[#393939] text-base md:text-[20px] mb-4">
                      We bring your teams into the process, ensuring actionable
                      outcomes and shared success
                    </p>
                  </div>
                  {/* Card 2 */}
                  <div className="flex-1">
                    <h2 className="text-[#2D53A4] text-2xl md:text-[32px] font-bold mb-4">
                      Transformation Solutions
                    </h2>
                    <p className="text-[#393939] text-base md:text-[20px] mb-4">
                      Unlock hidden opportunities to optimize your procurement
                      processes.
                    </p>
                  </div>
                  {/* Card 3 */}
                  <div className="flex-1">
                    <h2 className="text-[#2D53A4] text-2xl md:text-[32px] font-bold mb-4">
                      Collaborative Approach
                    </h2>
                    <p className="text-[#393939] text-base md:text-[20px] mb-4">
                      Implement sustainable frameworks to future-proof your
                      supply chain.
                    </p>
                  </div>
                </div>
              </>
            )}
            {activeTab === "strategy" && (
              <>
                <p className="mb-4 text-justify max-w-4xl mx-auto">
                  1IGS is transforming what procurement and supply chain teams
                  can achieve...
                </p>
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-start text-start">
                  {/* Left */}
                  <div className="flex-1">
                    <h2 className="text-[#2D53A4] text-2xl md:text-[32px] font-bold mb-4">
                      Build a Resilient Supply Chain With 1IGS
                    </h2>
                    <p className="text-[#393939] text-base md:text-[20px] mb-4">
                      At 1IGS, we specialize in efficient procurement
                      outsourcing...
                    </p>
                    <div className="text-[#F06230] flex items-center text-sm font-medium">
                      Optimize Your Supply Chain Today{" "}
                      <span className="ml-2">
                        <MdKeyboardDoubleArrowRight />
                      </span>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="flex-1">
                    <h2 className="text-[#2D53A4] text-2xl md:text-[32px] font-bold mb-4">
                      Build a Resilient Supply Chain With 1IGS
                    </h2>
                    <p className="text-[#393939] text-base md:text-[20px] mb-4">
                      At 1IGS, we specialize in efficient procurement
                      outsourcing...
                    </p>
                    <div className="text-[#F06230] flex items-center text-sm font-medium">
                      Be ready for tomorrow&rsquo;s challenges today.{" "}
                      <span className="ml-2">
                        <MdKeyboardDoubleArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "managed" && (
              <>
                <p className="mb-4 text-justify max-w-4xl mx-auto">
                  1IGS delivers tailored managed services to help your
                  business...
                </p>
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-start text-start">
                  {/* Left */}
                  <div className="flex-1">
                    <h2 className="text-[#2D53A4] text-2xl md:text-[32px] font-bold mb-4">
                      Procurement Outsourcing
                    </h2>
                    <p className="text-[#393939] text-base md:text-[20px] mb-4">
                      Optimize procurement and cut costs with 1IGS...
                    </p>
                    <div className="text-[#F06230] flex items-center text-sm font-medium">
                      Get a Free Consultation Today{" "}
                      <span className="ml-2">
                        <MdKeyboardDoubleArrowRight />
                      </span>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="flex-1">
                    <h2 className="text-[#2D53A4] text-2xl md:text-[32px] font-bold mb-4">
                      Supply Chain Outsourcing
                    </h2>
                    <p className="text-[#393939] text-base md:text-[20px] mb-4">
                      Optimize your supply chain with 1IG&rsquo;s flexible outsourcing...
                    </p>
                    <div className="text-[#F06230] flex items-center text-sm font-medium">
                      Transform Your Supply Chain Now{" "}
                      <span className="ml-2">
                        <MdKeyboardDoubleArrowRight />
                      </span>
                    </div>
                  </div>
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
