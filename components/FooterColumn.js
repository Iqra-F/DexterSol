"use client";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function FooterColumn({ title, links = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white">
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-default"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="text-xs   md:text-sm sm:font-semibold md:font-bold mb-2">{title}</h3>
        <span className="md:hidden text-xs sm:text-sm">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* ✅ Smooth expand-collapse */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } md:max-h-none md:opacity-100`}
      >
        <ul className="space-y-1 md:space-y-1">
          {links.map((link, index) => (
            <li
              key={index}
              className="border-b-[1px] pb-2 text-xs lg:text-[9px] border-gray-400 flex items-center"
            >
              <FaCaretRight className="mr-1" /> {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
