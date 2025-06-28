import Image from "next/image";

export default function CreateCard({
  create,
  isVisible,
  active,
  onClick,
  index,
}) {
  if (!create) return null; // 👈 prevents rendering if create is undefined

  return (
    <div
      className={` w-full rounded px-1 py-4 cursor-pointer group transition-all duration-700 transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      ${active ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      {/* Content */}
      <div className="mb-2 text-start ">
        <h2 className="text-xl font-semibold text-[#F36434] mb-2">
          {create.title}
        </h2>
      </div>

      {/* Icon or Image */}
      <div className="relative mb-2 rounded overflow-hidden">
        {create.image ? (
          <Image
            src={create.image}
            alt={create.title}
            width={500}
            height={240}
            className="w-full h-60 object-cover"
          />
        ) : (
          <div className="text-5xl text-center">{create.icon}</div>
        )}
      </div>

      <div className="mb-6  text-start text-[#4D4D4D]">
        <p className=" text-start leading-tight mb-4">{create.description}</p>
      </div>

      {/* Button */}
      <div className="text-center">
        <button className="bg-[#F36434] hover:bg-[#4e586f] w-full  text-white  sm:text-base md:text-sm text-sm px-2 sm:px-3 md:px-1 md:py-2  py-3 rounded transition-all duration-300">
          {create.btnText} ≫
        </button>
      </div>
    </div>
  );
}
