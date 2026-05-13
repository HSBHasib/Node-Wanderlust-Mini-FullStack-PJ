'use client'

import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaTrashAlt, FaEye } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const BookingPage = ({ data }) => {
  const { _id, destinationName, price, duration, imageUrl } = data;

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="w-full flex flex-col md:flex-row bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-6">
      {/* 1. Image Section */}
      <div className="w-full md:w-[300px] h-48 md:h-auto overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          width={800}
          height={800}
          priority
          quality={50}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* 2. Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-3 tracking-tight">
            {destinationName}
          </h3>

          {/* Details */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-semibold text-[#6C696D] text-sm">
              <FaCalendarAlt className="text-xs" />
              <span>Departure: {formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-[#6C696D] text-sm">
              <FaLocationDot className="text-xs" />
              <span>Booking ID: {duration * 2 - duration + 1}</span>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-4">
          <span className="text-3xl font-semibold text-[#15A1BF]">
            ${price}
          </span>
        </div>
      </div>

      {/* 3. Actions Section */}
      <div className="p-6 flex justify-end items-end gap-3 min-w-[150px]">
        <button onClick={() => removeFromBookingList(_id)} className="flex items-center justify-center gap-2 border border-red-200 text-red-500 px-4 py-2.5 rounded-sm  hover:bg-red-50 transition-colors text-[11px] font-bold uppercase tracking-widest group">
          <FaTrashAlt className="text-[12px]" /> Cancel
        </button>
        <Link href={`destination/${_id}`}>
          <button className="flex items-center justify-center gap-2 bg-[#15A1BF] text-white px-4 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest group">
            <FaEye className="text-[13px]" /> View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingPage;
