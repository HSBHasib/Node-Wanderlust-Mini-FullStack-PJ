"use client";

import { HiArrowRight } from "react-icons/hi2";

const Book = ({ destinationData }) => {
  return (
    <button
      // onClick={() => addToBookingList(destinationData)}
      className="w-full bg-[#15A1BF] text-white font-medium py-3.5 rounded-lg active:scale-95 transition-all duration-300 flex items-end justify-center gap-3 group"
    >
      Book Now
      <HiArrowRight className="text-lg group-hover:translate-x-1 transition" />
    </button>
  );
};

export default Book;
