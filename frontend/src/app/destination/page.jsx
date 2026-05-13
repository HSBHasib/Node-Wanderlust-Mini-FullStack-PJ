import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { getAllDestination } from "../../lib/FrontendData";
import DestinationCard from "@/reuseableCom/DestinationCard";
import EmptyState from "@/components/EmptyState";

const DestinationPage = async () => {
  const destinationData = await getAllDestination();
  console.log("All destination data, ", destinationData);
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 bg-white">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-5xl font-light text-slate-900 mb-3 tracking-tight">
          Explore All Destinations
        </h2>
        <p className="text-slate-500 text-lg">
          Find your perfect travel experience from our curated collection.
        </p>
      </div>

      {/* Filter Bar (Same as Image) */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-0 border text-[#6C696D] font-medium border-[#6C696D50] mb-6 uppercase text-[11px] tracking-[0.2em]`}
      >
        <div className="px-5 py-4 text-[13px] border-b md:border-b-0 md:border-r border-[#6C696D50] flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
          CATEGORY <IoIosArrowDown />
        </div>
        <div className="px-5 py-4 text-[13px] border-b md:border-b-0 md:border-r border-[#6C696D50] flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
          PRICE RANGE <IoIosArrowDown />
        </div>
        <div className="px-5 py-4 text-[13px] flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
          SORT BY <IoIosArrowDown />
        </div>
      </div>

      <p className="text-lg mb-8 text-[#6C696D]">
        Showing {destinationData?.length} destinations :
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {destinationData.length > 0 ? (
          destinationData?.map((item) => (
            <DestinationCard key={item._id} data={item} />
          ))
        ) : (
          // If db have no data than it will show a simple msg.
          <>
            <div></div>
            <EmptyState />
            <div></div>
          </>
        )}
      </div>
    </section>
  );
};

export default DestinationPage;
