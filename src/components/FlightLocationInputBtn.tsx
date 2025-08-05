import { useEffect, useRef, useState } from "react";
import LocationInputAndLocationsDropdown from "./LocationInputAndLocationsDropdown";

type InputContainerProp = {
  btnText: string;
  icon: React.ReactNode;
};

export default function FlightLocationInputBtn({
  btnText,
  icon,
}: InputContainerProp) {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative border border-white/30 rounded-md w-full"
    >
      <button
        type="button"
        onClick={() => setShowLocationDropdown(true)}
        className="flex items-center gap-2 w-full p-4 cursor-pointer"
      >
        {icon}
        {btnText}
      </button>

      {showLocationDropdown && (
        <LocationInputAndLocationsDropdown icon={icon} btnText={btnText} />
      )}
    </div>
  );
}
