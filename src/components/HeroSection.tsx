import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full md:w-[90%] lg:w-[82%] h-fit">
      <Image
        src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg"
        alt="Hero image"
        width={500}
        height={500}
        className="w-full"
      />

      <p className="absolute bottom-5 text-5xl right-[50%] translate-x-[50%]">
        Flights
      </p>
    </div>
  );
}
