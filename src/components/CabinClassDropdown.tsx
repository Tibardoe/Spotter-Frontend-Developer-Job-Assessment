import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const menuContent = ["Economy", "Premium Economy", "Business", "First"];

export default function CabinClassDropdown() {
  const searchParams = useSearchParams();
  const journeyType = searchParams.get("journeyType");
  //   const cabinClass = searchParams.get("cabinClass");
  const adults = searchParams.get("adults");
  const childrens = searchParams.get("childrens");
  const infants = searchParams.get("infants");
  const date = searchParams.get("date");
  const returnDate = searchParams.get("returnDate");
  const [selected, setSelected] = useState<string | null>(null);

  const router = useRouter();

  const handleClick = (text: string) => {
    setSelected(text);

    const query = new URLSearchParams();

    query.set("cabinClass", text);

    if (journeyType) query.set("joureyType", journeyType);
    if (adults) query.set("adults", adults);
    if (childrens) query.set("childrens", childrens);
    if (infants) query.set("infants", infants);
    if (date) query.set("date", date);
    if (returnDate) query.set("returnDate", returnDate);

    router.push(`/travel/flights?${query.toString()}`);
  };

  return (
    <ul className="flex flex-col gap-2 absolute bg-dropdownBg min-w-52 z-10">
      {menuContent.map((content) => (
        <button
          type="button"
          key={content}
          className="flex items-center gap-2 p-3"
          onClick={() => handleClick(content)}
        >
          <span className="w-8 h-4 flex items-center justify-center">
            {content === selected && <FaCheck />}
          </span>
          {content}
        </button>
      ))}
    </ul>
  );
}
