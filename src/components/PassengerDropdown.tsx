import { useState } from "react";
import PassengerSelection from "./PassengerSelection";
import { useRouter, useSearchParams } from "next/navigation";

export default function PassengerDropdown() {
  const searchParams = useSearchParams();

  const adultsQuery = searchParams.get("adults");
  const childrensQuery = searchParams.get("childrens");
  const infantsQuery = searchParams.get("infants");

  const [adults, setAdults] = useState(Number(adultsQuery) || 0);
  const [children, setChildren] = useState(Number(childrensQuery) || 0);
  const [infants, setInfants] = useState(Number(infantsQuery) || 0);

  const cabinClass = searchParams.get("cabinClass");
  const date = searchParams.get("date");
  const returnDate = searchParams.get("returnDate");

  const router = useRouter();

  const handleClick = () => {
    const query = new URLSearchParams();

    if (adults > 0) query.set("adults", adults.toString());
    if (children > 0) query.set("childrens", children.toString());
    if (infants > 0) query.set("infants", infants.toString());

    if (cabinClass) query.set("cabinClass", cabinClass);
    if (date) query.set("date", date);
    if (returnDate) query.set("returnDate", returnDate);

    router.push(`/travel/flights?${query.toString()}`);
  };

  return (
    <ul className="flex flex-col gap-2 absolute bg-dropdownBg min-w-64 z-10 p-3">
      <PassengerSelection
        text="Adults"
        count={adults}
        increase={() => setAdults(adults + 1)}
        decrease={() => setAdults(Math.max(adults - 1, 0))}
      />

      <PassengerSelection
        text="Children"
        count={children}
        increase={() => setChildren(children + 1)}
        decrease={() => setChildren(Math.max(children - 1, 0))}
      />

      <PassengerSelection
        text="Infants"
        count={infants}
        increase={() => setInfants(infants + 1)}
        decrease={() => setInfants(Math.max(infants - 1, 0))}
      />

      <div className="flex items-center gap-2 justify-end">
        <button
          type="button"
          onClick={() => {
            /* maybe close the dropdown */
          }}
          className="hover:text-textHover text-white py-2 px-4 rounded-md mt-2"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleClick}
          className="hover:text-textHover text-white py-2 px-4 rounded-md mt-2"
        >
          Done
        </button>
      </div>
    </ul>
  );
}
