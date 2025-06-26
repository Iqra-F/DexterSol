import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#3c4250]  text-white text-sm relative z-10">
      {/* Background overlay */}
      <div
        className="bg-cover bg-center bg-no-repeat py-12 px-6 md:px-10 lg:px-16 xl:px-24"
        style={{ backgroundImage: "url('/background-network.png')" }}
      >
        <Image
          src="/footer-logo.png"
          alt="Step"
          width={284}
          height={90}
          className="object-cover mb-10"
          priority
        />
        <div className="max-w-[1600px]  mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white">
          {/* Column 1 */}
          <div>
            <h3 className="text-base font-bold mb-2">Procurement Consulting</h3>
            <ul className="space-y-1 ">
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Let's Create
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Procurement Consulting
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Demand & Supply Planning
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Strategic Sourcing
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Cost of Goods Sold
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> BPO
              </li>
              <li className=" pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Procurement Risk
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-base font-bold mb-2">
              Supply Chain Consulting
            </h3>
            <ul className="space-y-1">
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Sustainability and Resilience
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Strategy
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Diagnostics
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Inventory Optimization
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Manufacturing Excellence
              </li>
              <li className=" pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Warehousing & Transport
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-base font-bold mb-2">IIGS iPROCURE</h3>
            <ul className="space-y-1">
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Direct Procurement
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Sourcing Support
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Source-To-Contract
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Midsize Enterprises
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Lifecycle Management
              </li>
              <li className=" pb-2  border-gray-400 flex items-center">
                <FaCaretRight /> Risk Management
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-base font-bold mb-2">iSUPPLY</h3>
            <ul className="space-y-1">
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Supply Chain Visibility
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Planning
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Collaboration
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Network Optimization
              </li>
              <li className=" pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Inventory & Warehouse
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-base font-bold mb-2">Managed Services</h3>
            <ul className="space-y-1">
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Procurement Outsourcing
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Strategic Sourcing
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Tail-Spend Management
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Forecasting
              </li>
              <li className=" pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Logistics Management
              </li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h3 className="text-base font-bold mb-2">Company</h3>
            <ul className="space-y-1 mb-4">
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> About Us
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Leadership
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Careers
              </li>
              <li className="border-b-[1px] pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Partners
              </li>
              <li className=" pb-2 border-gray-400 flex items-center">
                <FaCaretRight /> Contact Us
              </li>
            </ul>

            {/* Social Icons */}
            <div className="hidden md:block">
              <h4 className="font-bold mb-2">Stay Connected</h4>
              <div className="flex items-center gap-3 text-white text-lg mb-4">
                <div className=" relative rounded-full overflow-hidden">
                  <Image
                    src="/yt.png"
                    alt="Instagram Icon"
                    width={32}
                    height={32}
                    className="object-cover"
                    priority
                  />
                </div>

                <div className=" relative rounded-full overflow-hidden">
                  <Image
                    src="/fb.png"
                    alt="Instagram Icon"
                    width={32}
                    height={32}
                    className="object-cover rounded-full"
                    priority
                  />
                </div>

                <div className=" relative rounded-full overflow-hidden">
                  <Image
                    src="/insta.png"
                    alt="Instagram Icon"
                    width={32}
                    height={32}
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="relative rounded-full overflow-hidden">
                  <Image
                    src="/linkedin.png"
                    alt="Instagram Icon"
                    width={32}
                    height={32}
                    className="object-cover"
                    priority
                  />
                </div>

                <div className=" relative rounded-full overflow-hidden">
                  <Image
                    src="/x.png"
                    alt="Instagram Icon"
                    width={32}
                    height={32}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Subscribe */}
              <div className="space-y-2">
                <h4 className="font-bold">Subscribe</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="px-1 py-2 w-[60px]  border-[1px] border-white  rounded-l text-white text-[9px] focus:outline-none"
                  />

                  <button className="bg-[#F36434] text-white px-1 rounded-r text-[9px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Social Icons */}
          <div className="md:hidden block">
            <h4 className="font-bold mb-2">Stay Connected</h4>
            <div className="flex items-center gap-3 text-white text-lg mb-4">
              <div className=" relative rounded-full overflow-hidden">
                <Image
                  src="/yt.png"
                  alt="Instagram Icon"
                  width={32}
                  height={32}
                  className="object-cover rounded-full"
                  priority
                />
              </div>

              <div className=" relative rounded-full overflow-hidden">
                <Image
                  src="/fb.png"
                  alt="Instagram Icon"
                  width={32}
                  height={32}
                  className="object-cover rounded-full"
                  priority
                />
              </div>

              <div className=" relative rounded-full overflow-hidden">
                <Image
                  src="/insta.png"
                  alt="Instagram Icon"
                  width={32}
                  height={32}
                  className="object-cover rounded-full"
                  priority
                />
              </div>

              <div className="relative rounded-full overflow-hidden">
                <Image
                  src="/linkedin.png"
                  alt="Instagram Icon"
                  width={32}
                  height={32}
                  className="object-cover rounded-full"
                  priority
                />
              </div>

              <div className=" relative rounded-full overflow-hidden">
                <Image
                  src="/x.png"
                  alt="Instagram Icon"
                  width={32}
                  height={32}
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Subscribe */}
            <div className="space-y-2">
              <h4 className="font-bold">Subscribe</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="px-1 py-2 w-[60px]  border-[1px] border-white  rounded-l text-white text-[9px] focus:outline-none"
                />

                <button className="bg-[#F36434] text-white px-1 rounded-r text-[9px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2D53A4]  text-center text-xs ">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          {/* zigzag */}
          <div className="relative w-full md:w-1/3 overflow-hidden bg-transparent h-11">
            {/* 🔹 Top Row of Zigzags (no horizontal flip) */}
            <div className="absolute top-0 left-0 bg-transparent flex h-11">
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <Image
                    key={`top-${i}`}
                    src="/footer.png"
                    alt={`Top ${i}`}
                    width={178}
                    height={178}
                    className="object-cover block m-0 p-0"
                    priority
                  />
                ))}
            </div>

            {/* 🔹 Bottom Row of Zigzags (just flipped vertically + offset) */}
            <div className="absolute top-[89px] bg-transparent h-11 left-[89px] flex ">
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <Image
                    key={`bottom-${i}`}
                    src="/footer.png"
                    alt={`Bottom ${i}`}
                    width={178}
                    height={178}
                    className="object-cover block m-0 p-0 -scale-y-100"
                    priority
                  />
                ))}
            </div>
          </div>

          <span className="text-white">
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
      </div>
      <div className="w-full text-xs my-1 text-center justify-center">
        © Copyright 2017–2025 IIGS Corporation. ALL Rights Reserved
      </div>
    </footer>
  );
}
