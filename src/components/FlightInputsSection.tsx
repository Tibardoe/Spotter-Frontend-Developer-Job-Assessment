"use client";

// import { useState } from "react";
import { FaExchangeAlt, FaSearch } from "react-icons/fa";
import FlightInputDropdownBtn from "./FlightInputDropdownBtn";
import { MdOutlinePerson, MdSwapHoriz } from "react-icons/md";
// import FlightLocationInput from "./FlightLocationInput";
import { FaRegCircle } from "react-icons/fa";
import FlightLocationInputBtn from "./FlightLocationInputBtn";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function FlightInputsSection() {
  //   const [location, setLocation] = useState<string | null>(null);

  const searchParams = useSearchParams();

  //   const queryObject = Object.fromEntries(searchParams.entries());

  const queryLength = Array.from(searchParams.entries()).length;

  //   const handleChange = (value: string) => {
  //     setLocation(value);
  //   };

  return (
    <div className="relative bg-pageBg rounded-md px-5 py-3 shadow-lg mb-10 space-y-2">
      <div className="flex items-center gap-2">
        <FlightInputDropdownBtn
          type="journey type"
          text="Round trip"
          icon={<FaExchangeAlt />}
        />

        <FlightInputDropdownBtn
          type="passengers"
          text="2"
          icon={<MdOutlinePerson />}
        />

        <FlightInputDropdownBtn type="cabin class" text="Economy" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">
        <div className="flex items-center gap-2 w-full md:w-[60%]">
          <FlightLocationInputBtn
            btnText="Where from?"
            icon={<FaRegCircle />}
          />

          <MdSwapHoriz className="text-2xl shrink-0" />

          <FlightLocationInputBtn
            btnText="Where to?"
            icon={<IoLocationOutline />}
          />
        </div>

        <div className="flex items-center justify-between gap-2 border border-white/30 p-4 rounded-md w-full md:w-[40%]">
          <div>date</div>

          <hr className="w-8 rotate-90" />

          <div>time</div>
        </div>
      </div>

      {queryLength > 0 ? (
        <Link
          href="/travel/flights/search"
          className="absolute -bottom-4 right-[50%] translate-x-[50%] py-2 px-5 bg-textHover rounded-full flex items-center gap-2 text-black"
        >
          <FaSearch />
          Search
        </Link>
      ) : (
        <Link
          href="/travel/explore"
          className="absolute -bottom-4 right-[50%] translate-x-[50%] py-2 px-5 bg-textHover rounded-full flex items-center gap-2 text-black"
        >
          <FaSearch />
          Explore
        </Link>
      )}
    </div>
  );
}
