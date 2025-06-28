import Image from "next/image";

export default function SupplyCard({
  supply,
  isVisible,
  active,
  onClick,
  index,
}) {
  if (!supply) return null; // 👈 prevents rendering if supply is undefined

  return (
    <div
      className={` w-full rounded px-1 text-start py-4 cursor-pointer group transition-all duration-700 transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      ${active ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      {/* Icon or Image */}
      <div className="relative mb-2 rounded overflow-hidden">
        {supply.image ? (
          <Image
            src={supply.image}
            alt={supply.title}
            width={500}
            height={240}
            className="w-full h-60 object-cover"
          />
        ) : (
          <div className="text-5xl text-center">{supply.icon}</div>
        )}
      </div>
      {/* Content */}
      <div className="mb-2 text-start ">
        <h2 className="text-xl font-semibold text-[#F36434] mb-2">
          {supply.title}
        </h2>
      </div>
      <div className="mb-6  text-start text-[#4D4D4D]">
        <p className=" text-start leading-tight mb-4">{supply.description}</p>
      </div>

      {/* Button */}
      <div className="justify-start text-center">
        <button
          className={`bg-[#2D53A4] font-normal  hover:bg-[#4e586f] text-white md:text-base   text-sm px-2 sm:px-3 md:px-1 lg:px-3 py-3 rounded transition-all duration-300`}
        >
          {supply.btnText} ≫
        </button>
      </div>
    </div>
  );
}
