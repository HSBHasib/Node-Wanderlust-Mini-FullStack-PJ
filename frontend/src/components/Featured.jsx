import { getFeaturedDestination } from "@/lib/FrontendData";
import DestinationCard from "@/reuseableCom/DestinationCard";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const FeaturedDestination = async () => {
  const featuredData = await getFeaturedDestination();
  // const {} = featuredData;
  console.log("All featured data - ", featuredData);
  return (
    <div className="max-w-6xl mx-auto my-18">
      {/* Header */}
      <div className="mb-12 flex justify-between items-center">
        <div>
          <h2 className="text-5xl font-normal text-slate-900 mb-2 tracking-tight">
            Featured Destination
          </h2>
          <p className="text-slate-500 text-[16px]">
            Handpicked travel experiences for the adventure seekers.
          </p>
        </div>

        <div>
            <button className="flex items-center gap-3 uppercase text-[14px] text-[#00B8DB] border-[1.3px] rounded-xs border-[#00B8DB] px-6 py-2 active:scale-95 transition-all duration-500">All Destination <GoArrowRight size={18} /></button>
        </div>
      </div>

      {/* <DestinationCard /> */}
    </div>
  );
};

export default FeaturedDestination;
