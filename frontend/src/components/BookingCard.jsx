"use client";

import React from "react";
import { FaCheck, FaRegCalendarAlt } from "react-icons/fa";

import { DateField, Description, FieldError, Label } from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { bookingDataFunc } from "@/lib/BackendData";
import { HiArrowRight } from "react-icons/hi2";

const BookingCard = ({ destinationData }) => {
  const { _id, destinationName, price, imageUrl } = destinationData;
  // Date from heroUI
  const [value, setValue] = useState(null);
  const todayDate = today(getLocalTimeZone());
  const isInvalid = value !== null && value.compare(todayDate) < 0;

  // User Details
  const { data: session } = authClient.useSession();
  const user = session?.user;
  
  const handleBookingSubmit = async () => {
    // Token
    const getToken = await authClient.token();
    const token = getToken?.data?.token;

    // Booking Details
    const bookingData = {
      destinationId: _id,
      destinationName,
      price,
      destinationImage: imageUrl,
      departureDate: new Date(value),
      userId: user?.id,
    };

    await bookingDataFunc(bookingData, value, token);
  }

  return (
    <div className="sticky top-10 border border-gray-100 rounded-xl p-8 shadow-xl shadow">
      <div className="mb-8">
        <p className="text-[#6C696D] text-sm mb-1 font-medium tracking-wide">
          Starting from
        </p>
        <p className="text-4xl font-semibold text-[#15A1BF]">${price}</p>
        <span className="text-[#6C696D] text-sm">per person</span>
      </div>

      {/* Date Input Box */}

      <DateField
        isRequired
        className="w-[256px] space-y-1 relative md:w-full mb-5 border-b border-gray-200 pb-5 "
        isInvalid={isInvalid}
        minValue={todayDate}
        name="date"
        value={value}
        onChange={setValue}
      >
        <Label className="text-[#6C696D] pl-1">Date</Label>
        <DateField.Group className="h-13">
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
        {isInvalid ? (
          <FieldError className="pl-1">
            Date must be today or in the future
          </FieldError>
        ) : (
          <Description className="pl-1">
            Enter a date from today onwards
          </Description>
        )}
        <FaRegCalendarAlt className="absolute right-4 top-11 text-gray-400" />
      </DateField>

      {/* Book Button */}
      <button
        onClick={() => handleBookingSubmit()}
        className="w-full bg-[#15A1BF] text-white font-medium py-3.5 rounded-lg active:scale-95 transition-all duration-300 flex items-end justify-center gap-3 group"
      >
        Book Now
        <HiArrowRight className="text-lg group-hover:translate-x-1 transition" />
      </button>

      {/* Support/Info */}
      <div className="mt-8 space-y-4">
        <div className="flex items-end gap-2 text-sm text-[#6C696D]">
          <FaCheck className="text-green-500" /> Free cancellation up to 7 days
        </div>
        <div className="flex items-end gap-2 text-sm text-[#6C696D]">
          <FaCheck className="text-green-500" /> Travel insurance included
        </div>
        <div className="flex items-end gap-2 text-sm text-[#6C696D]">
          <FaCheck className="text-green-500" /> 24/7 customer support
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
