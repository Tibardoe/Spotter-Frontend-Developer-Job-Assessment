import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import JourneyTypeDropdown from "./JourneyTypeDropdown";
import PassengerDropdown from "./PassengerDropdown";
import CabinClassDropdown from "./CabinClassDropdown";

type FlightInputContainerProp = {
  text: string;
  icon?: React.ReactNode;
  type: string;
};

export default function FlightInputDropdownBtn({
  text,
  icon,
  type,
}: FlightInputContainerProp) {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="flex items-center gap-2 cursor-pointer p-2 hover:bg-hoverAccent rounded-md"
      >
        {type !== "cabin class" && icon}

        {text}

        <FaCaretDown
          className={cn("transition-all duration-300", {
            "rotate-180": isOpen,
          })}
        />
      </button>

      {isOpen && type === "journey type" && <JourneyTypeDropdown />}
      {isOpen && type === "passengers" && <PassengerDropdown />}
      {isOpen && type === "cabin class" && <CabinClassDropdown />}
    </div>
  );
}
