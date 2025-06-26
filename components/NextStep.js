import Image from "next/image";
import { FaPhone } from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

const steps = [
  {
    title: "Ask Us",
    desc: "Send us your question(s)",
    image: "/blue4.png",
  },
  {
    title: "RFP",
    desc: "Request for a business proposal",
    image: "/blue3.png",
  },
  {
    title: "Feedback",
    desc: "Share your thoughts, comments and suggestions",
    image: "/blue2.png",
  },
  {
    title: "Speak to an Expert",
    desc: "Schedule a consult with a specialist",
    image: "/blue1.png",
  },
];

export default function NextStep() {
  return (
    <div className="relative text-white py-16 px-6 md:px-16">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/nextStep.png')] bg-cover bg-center bg-no-repeat z-0" />

      {/* Blurry Overlay */}
      <div className="absolute inset-0 bg-[#2D53A4BF] backdrop-brightness-75 z-10" />

      {/* Content Wrapper with higher z-index */}
      <div className="relative z-20 text-center mb-12 text-white">
        <div className="flex items-center justify-center gap-2 text-xl font-bold">
          <FaPhone />
          <span>TAKE THE NEXT STEP</span>
        </div>
        <p className="mt-4 text-justify max-w-4xl mx-auto text-sm md:text-base font-light leading-relaxed">
          We provide customized solutions to meet your needs, blending
  innovation and excellence to enhance your life and deliver results. At
  IIGS, we&rsquo;re redefining Global Procurement and Supply Chain. With
  strong ethics, a commitment to sustainability, and support for local
  communities, we address challenges while making a meaningful impact.
        </p>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative text-center z-20 p-6 rounded-md borber border-[1px] border-white hover:bg-opacity-20 transition-all duration-300"
          >
            <div className="absolute bg-white top-4 right-4  text-[#244281] ">
              <FiArrowUpRight />
            </div>
            <div className="mb-4 flex justify-center">
              <Image
                src={step.image}
                alt="Step"
                width={81}
                height={81}
                className="object-contain"
                priority
              />
            </div>

            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm font-light">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
