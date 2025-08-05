import { FaMinus, FaPlus } from "react-icons/fa";

type PassengerProp = {
  text: string;
  count: number;
  increase: () => void;
  decrease: () => void;
};

export default function PassengerSelection({
  text,
  count,
  increase,
  decrease,
}: PassengerProp) {
  return (
    <div className="flex items-center justify-between p-2">
      <p>{text}</p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={decrease}
          className="flex items-center justify-center p-2 bg-gray-500 rounded-md cursor-pointer"
        >
          <FaMinus />
        </button>

        <span>{count}</span>

        <button
          type="button"
          onClick={increase}
          className="flex items-center justify-center p-2 bg-gray-500 rounded-md cursor-pointer"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
