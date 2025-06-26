"use client";

import React, { useEffect, useState, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { supply } from "../data/servicesData";
import Image from "next/image";
import SupplyCard from "./SupplyCard";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function SupplyChain() {
  const [isVisible, setIsVisible] = useState(false);
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[url('/WhyUs-bg.png')] px-20 bg-cover bg-center bg-no-repeat w-full"
    >
      {/* Header Section */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <Image src="/game.png" alt="hero" height={51} width={48} priority />
            <h1 className="text-[32px] font-bold text-[#2460b4] mb-4">
              Procurement and Supply Chain is Our Game
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-6 text-justify">
            At 1IGS, we transform supply chains with resilience, agility, and
            sustainability...
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
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
      <button className=" hover:bg-[#362e2b] bg-[#F06230] my-14 mx-auto justify-center text-center text-white text-lg hover:text-white px-6 py-3 rounded  transition-colors">
                  <span className="flex items-center">
                    CONNECT WITH 1IGS TODAY{" "}
                    <span className="ml-2">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                  </span>
                </button>
    </div>
  );
}
