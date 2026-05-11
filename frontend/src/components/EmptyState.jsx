import React from "react";
import { FaInbox } from "react-icons/fa";

const EmptyState = () => {
  return (
    <div>
      <div className="h-[60vh] flex items-center">
        <div className="flex flex-col justify-center items-center px-6 py-10 bg-gray-50 rounded-lg ">
          <div className="bg-white p-6 rounded-full shadow-sm mb-4">
            <FaInbox className="text-5xl text-slate-200" />
          </div>
          <h3 className="text-xl font-bold text-slate-700 uppercase tracking-widest">
            No Destinations Found
          </h3>
          <p className="text-slate-400 mt-2 text-center max-w-xs">
            Sorry, we couldn't find any travel packages right now. Please try
            again later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
