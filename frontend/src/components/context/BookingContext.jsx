"use client";

import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingList, setBookingList] = useState([]);

  const addToBookingList = (destinationData) => {
    const isAllReadyExits = bookingList.find(
      (data) => data._id === destinationData._id,
    );

    if (isAllReadyExits) {
      alert("This is all ready booked.");
      return;
    }
    setBookingList((prev) => [...prev, destinationData]);
  };

  // for remove from the array
  const removeFromBookingList = (id) => {
    const updatedList = bookingList.filter((item) => item._id !== id);
    setBookingList(updatedList);
  };

  return (
    <BookingContext.Provider
      value={{ bookingList, addToBookingList, removeFromBookingList }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
