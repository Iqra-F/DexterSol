"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import services, { create } from "../data/servicesData";
import CreateCard from "./CreateCard";

const LetsCreate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#EFF7FE] px-4 sm:px-6 md:px-10 xl:px-14 py-16"
    >
      {/* Header */}
      <div
        className={`relative text-center mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Badge */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]">
          <Image
            src="/badge.png"
            alt="badge"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2D53A4] mb-6">
          Let&rsquo;s Create
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
          Simplify your supply chain today with our tailored outsourcing
          solutions. Whether you&rsquo;re looking to save time, cut costs, or
          improve your supplier relationships, we&rsquo;ve got you covered.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-2 lg:gap-4 mb-16">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            isVisible={isVisible}
            active={activeService === index}
            index={index}
            onClick={() => setActiveService(index)}
          />
        ))}
      </div>

      {/* Text */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-justify text-[#2460b4] mb-6 leading-relaxed">
        Innovating procurement and supply chains boosts efficiency, resilience,
        and scalability through improved collaboration and control.
      </h2>

      {/* Create Cards + Assistance Box */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-2 w-full">
        {/* Create Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-1 flex-1">
          {create.map((item, index) => (
            <CreateCard
              key={index}
              create={item}
              isVisible={isVisible}
              active={false}
              index={index}
              onClick={() => {}}
            />
          ))}
        </div>

        {/* Assistance Box */}
        <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0">
          <div className="bg-[#2D53A4] text-white h-full p-4 sm:p-6 relative overflow-hidden rounded-lg">
            {/* Decorative Circles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full transform translate-x-10 -translate-y-10" />
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-white rounded-full transform -translate-x-10 translate-y-10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image alt="img" src="/24.png" width={60} height={70} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">
                  24/7 Personal Assistance
                </h3>
              </div>

              <p className="text-white text-sm mb-6 leading-relaxed">
                At IIGS, we&rsquo;re revolutionizing procurement and supply
                chain management. Our solutions enhance efficiency, strengthen
                resilience, and drive collaboration. Gain full control of your
                supply chain and achieve scalability to meet your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 text-black">
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-4">
                    <p className="text-sm leading-relaxed px-3 py-3 rounded-lg bg-white">
                      <span className="font-medium">
                        IIGS helps you manage and optimize your global supply
                        chain from supplier to customer.
                      </span>{" "}
                      Simplify logistics with seamless supply chain solutions!
                    </p>
                    <button className="w-full bg-white text-[#2D53A4] px-3 py-3 rounded font-medium text-xs hover:bg-blue-50 transition-colors">
                      TRANSFORM YOUR SUPPLY CHAIN ≫
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsCreate;
