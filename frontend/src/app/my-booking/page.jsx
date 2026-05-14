import React from "react";
import EmptyBooking from "@/components/EmptyBooking";
import BookingPage from "@/components/BookingPage";
import { getBookingData } from "@/lib/FrontendData";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const MyBookingPage = async () => {

  // Get all data indivitual Users
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const id = user?.id;

  // Pass the user is to booking function
  const bookingData = await getBookingData(id);
  
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

      {bookingData.length > 0 ? (
        bookingData.map((data, idx) => <BookingPage key={idx} data={data} />)
      ) : (
        <EmptyBooking />
      )}
    </div>
  );
};

export default MyBookingPage;
