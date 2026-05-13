"use client";

import React from "react";
import BookingCards from "@/components/BookingPage";
import EmptyBooking from "@/components/EmptyBooking";

const MyBookingPage = () => {
  return (
    <div className="py-16 max-w-7xl px-6 h-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-5xl font-light text-slate-900 mb-3 tracking-tight">
          My Bookings
        </h2>
        <p className="text-slate-500 text-lg">
          Manage and view your upcoming travel plans.
        </p>
      </div>

      {bookingList.length > 0 ? (
        bookingList.map((data, idx) => (
          <BookingCards key={idx} data={data} />
        ))
      ) : (
        <EmptyBooking />
      )}
    </div>
  );
};

export default MyBookingPage;
