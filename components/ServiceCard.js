import Image from "next/image";

export default function ServiceCard({
  service,
  isVisible,
  active,
  onClick,
  index,
}) {
  return (
    <div
      className={`max-w-xl mx-auto bg-white rounded px-3 py-4 cursor-pointer group transition-all duration-700 transform
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    ${active ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"}
  `}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      {/* Content */}
      <div className="mb-6 text-start">
        <h2 className="text-xl font-bold text-[#F36434] mb-4">
          {service.titleOne}
          <span className="text-[#506BA4]">{service.titleTwo}</span>
        </h2>
      </div>
      {/* Icon or Image */}
      <div className="relative mb-6 rounded overflow-hidden">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.titleOne}
            width={500}
            height={240}
            className="w-full h-60 object-cover"
          />
        ) : (
          <div className="text-5xl text-center">{service.icon}</div>
        )}
      </div>
      <div className="mb-6 text-start text-[#4D4D4D]">
        <p className="font-semibold">{service.subTitle}</p>
        <p className=" text-justify text-base leading-tight mb-4">
          {service.description}
        </p>
      </div>

      {/* Button */}
      <div className="text-center">
        <button
          className={`bg-[#2D53A4] hover:bg-[#4e586f] text-white font-semibold p-3 rounded transition-all duration-300`}
        >
          {service.btnText} ≫
        </button>
      </div>
    </div>
  );
}
