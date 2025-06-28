"use client";

import React, { useEffect, useState, useRef } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import { supply } from "../data/servicesData";
import SupplyCard from "./SupplyCard";

export default function SupplyChain() {
  const [isVisible, setIsVisible] = useState(false);
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
    <div
      ref={sectionRef}
      className="min-h-screen bg-[url('/WhyUs-bg.png')] bg-cover bg-center bg-no-repeat w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16"
    >
      {/* Header Section */}
      <div className=" mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mb-6">
          <Image
            src="/game.png"
            alt="hero"
            height={48}
            width={48}
            priority
            className="mx-auto sm:mx-0"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2460b4]">
            Procurement and Supply Chain is Our Game
          </h1>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-justify max-w-4xl mx-auto px-2">
          At 1IGS, we transform supply chains with resilience, agility, and
          sustainability. Our strategies deliver efficiency, results, and
          lasting impact for businesses globally. Upgrade your operations with
          future-ready solutions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-2.5 mt-12">
        {supply.map((item, index) => (
          <SupplyCard
            key={index}
            supply={item}
            isVisible={isVisible}
            active={false}
            index={index}
            onClick={() => {}}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-14">
        <button className="flex items-center gap-2 bg-[#F06230] hover:bg-[#362e2b] text-white text-sm sm:text-base px-6 py-3 rounded transition-colors">
          CONNECT WITH 1IGS TODAY <MdKeyboardDoubleArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
