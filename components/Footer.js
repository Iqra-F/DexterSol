"use client";
import Image from "next/image";
import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer className="text-white text-sm relative z-10 overflow-hidden">
      {/* 🔧 Background Layer (Fixed) */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/Network.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#393e47] opacity-80" />
      </div>

      {/* ✅ Content Wrapper */}
      <div className="py-12 px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
        {/* Logo */}
        <div className="relative w-[160px] mb-10 h-[50px] sm:w-[195px] sm:h-[60px] md:w-[284px] md:h-[90px]">
          <Image
            src="/footer-logo.png"
            alt="Step"
            fill
            className="object-cover mb-10"
            priority
          />
        </div>

        {/* Grid */}
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <FooterColumn
            title="Procurement Consulting"
            links={[
              "Let’s Create",
              "Procurement Consulting",
              "Demand & Supply Planning",
              "Strategic Sourcing",
              "Cost of Goods Sold",
              "BPO",
              "Procurement Risk",
            ]}
          />
          <FooterColumn
            title="Supply Chain Consulting"
            links={[
              "Sustainability and Resilience",
              "Strategy",
              "Diagnostics",
              "Inventory Optimization",
              "Manufacturing Excellence",
              "Warehousing & Transport",
            ]}
          />
          <FooterColumn
            title="IIGS iPROCURE"
            links={[
              "Direct Procurement",
              "Sourcing Support",
              "Source-To-Contract",
              "Midsize Enterprises",
              "Lifecycle Management",
              "Risk Management",
            ]}
          />
          <FooterColumn
            title="Managed Services"
            links={[
              "Procurement Outsourcing",
              "Strategic Sourcing",
              "Tail-Spend Management",
              "Forecasting",
              "Logistics Management",
            ]}
          />
          <FooterColumn
            title="iSUPPLY"
            links={[
              "Supply Chain Visibility",
              "Planning",
              "Collaboration",
              "Network Optimization",
              "Inventory & Warehouse",
            ]}
          />
          <div>
            <FooterColumn
              title="Company"
              links={[
                "About Us",
                "Leadership",
                "Careers",
                "Partners",
                "Contact Us",
              ]}
            />
            <div className="hidden lg:block mt-4">
              <h4 className="font-bold mb-2">Stay Connected</h4>
              <div className="flex items-center gap-3 mb-4">
                {["yt", "fb", "insta", "linkedin", "x"].map((icon) => (
<>
  <div className=" relative rounded-full overflow-hidden">
                  <Image
                    src={`/${icon}.png`}
      alt={`${icon} icon`}
                    width={32}
                    height={32}
                    className="object-cover"
                    priority
                  />
                </div>
                 </>
                ))}
              </div>

              {/* Subscribe */}
              <div className="space-y-2">
                <h4 className="font-bold">Subscribe</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="px-2 py-2 w-full md:w-[80px] border placeholder:text-white border-white rounded-l text-white text-[9px] focus:outline-none"
                  />

                  <button className="bg-[#F36434] text-white px-1 rounded-r text-[9px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Socials */}
        <div className="lg:hidden mt-6">
          <h4 className="font-bold mb-2">Stay Connected</h4>
          <div className="flex items-center gap-3 mb-4">
            {["yt", "fb", "insta", "linkedin", "x"].map((icon) => (
              <>
              <div className=" relative rounded-full overflow-hidden">
                  <Image
                   src={`/${icon}.png`}
      alt={`${icon} icon`}
                    width={32}
                    height={32}
                    className="object-cover"
                    priority
                  />
                </div>
                </>
            ))}
          </div>

          {/* Subscribe */}
          <div className="space-y-2">
            <h4 className="font-bold">Subscribe</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-1 py-2 w-[60px] border border-white rounded-l text-white text-[9px] focus:outline-none"
              />
              <button className="bg-[#F36434] text-white px-1 rounded-r text-[9px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="bg-[#2D53A4] w-full py-2 text-center text-xs relative z-10">
        <span className="block">
          <a href="#" className="hover:underline">
            Privacy Center
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
        </span>
      </div>

      <div className="text-[8px] sm:text-xs my-1 text-center z-10">
        © Copyright 2017–2025 IIGS Corporation. ALL Rights Reserved
      </div>
    </footer>
  );
}
