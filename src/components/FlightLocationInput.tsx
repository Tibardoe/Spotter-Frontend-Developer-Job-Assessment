import { IoMdArrowBack } from "react-icons/io";

type InputProp = {
  btnText: string;
  icon: React.ReactNode;
  // placeholder: string;
  handleChange: (value: string) => void;
  location: string;
};

export default function FlightLocationInput({
  location,
  btnText,
  icon,
  handleChange,
}: InputProp) {
  return (
    <div className="border-b p-3 flex items-center gap-2">
      <span className="hidden md:flex">{icon}</span>

      <button type="button" className="md:hidden cursor-pointer">
        <IoMdArrowBack className="text-2xl" />
      </button>
      <input
        type="text"
        className="outline-none"
        value={location}
        placeholder={btnText}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
