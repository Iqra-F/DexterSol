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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-[#EFF7FE]"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          className={`relative text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge Image */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[80px] h-[80px]">
            <Image
              src="/badge.png"
              alt="badge"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-[32px] font-bold text-[#2D53A4] mb-6">
            Let&rsquo;s Create
          </h2>

          {/* Subtext */}
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Simplify your supply chain today with our tailored outsourcing
            solutions. Whether you&rsquo;re looking to save time, cut costs, or
            improve your supplier relationships, we&rsquo;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Other Cards Grid */}
        <h2 className="text-3xl font-bold text-justify text-[#2460b4]">
          Innovating procurement and supply chains boosts efficiency,
          resilience, and scalability through improved collaboration and
          control.
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 w-full px-4  py-6">
          {/* Left Section with Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 flex-1">
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

          {/* Right Section with Assistance Box */}
          <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0">
            <div className="bg-[#2D53A4]  text-white h-full p-3 relative overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center">
                  {/* Icon */}
                  <div className="mb-4 mr-5">
                    <Image alt="img" src="/24.png" width={70} height={80} />
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl text-white font-bold mb-4">
                    24/7 Personal Assistance
                  </h3>
                </div>
                {/* Description */}
                <p className="text-white text-sm mb-6 leading-relaxed">
                  At IIGS, we&rsquo;re revolutionizing procurement and supply
                  chain management. Our solutions enhance efficiency, strengthen
                  resilience, and drive collaboration. Gain full control of your
                  supply chain and achieve scalability to meet your goals.
                </p>
                <div className="flex justify-between gap-6 text-black">
                  {/* right */}
                  <div className="flex flex-col gap-6 ">
                    <p className="text-sm leading-relaxed px-2 py-3 rounded-lg bg-white">
                      <span className="font-medium">
                        IIGS helps you manage and optimize your global supply
                        chain from supplier to customer.
                      </span>
                      Simplify logistics with seamless supply chain solutions!
                    </p>
                    <button className="w-full bg-white text-[#2D53A4] px-2 py-4 rounded font-medium text-[9px] hover:bg-blue-50 transition-colors">
                      TRANSFORM YOUR SUPPLY CHAIN ≫
                    </button>
                  </div>
                  {/* left */}
                  <div className="flex flex-col gap-6 ">
                    <p className="text-sm leading-relaxed px-2 py-3 rounded-lg bg-white">
                      <span className="font-medium">
                        IIGS helps you manage and optimize your global supply
                        chain from supplier to customer.
                      </span>
                      Simplify logistics with seamless supply chain solutions!
                    </p>
                    <button className="w-full bg-white text-[#2D53A4] px-2 py-4 rounded font-medium text-[9px] hover:bg-blue-50 transition-colors">
                      TRANSFORM YOUR SUPPLY CHAIN ≫
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsCreate;
