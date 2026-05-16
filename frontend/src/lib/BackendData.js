import { redirect } from "next/navigation";
import { toast } from "react-toastify";

// ----------- Destination Data -----------

// Access Data From Destination From - (admin page), than send it to mongodb through backend
export const DestinationFormHandaler = async (e, getToken) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(e.currentTarget);
  const destination = Object.fromEntries(formData.entries());

  const token = await getToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(destination),
  });

  const data = await res.json();

  if (data.insertedId) {
    form.reset();
  }
};

// Update Destination Data
export const updateDestinationData = async (e, _id, getToken) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const updateDestination = Object.fromEntries(formData.entries());

  const token = await getToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updateDestination),
  });
  const data = await res.json();
  redirect(`/destination/${_id}`);

  // if(data.modifiedCount) {
  // }
};

// Update Destination Data
export const deleteDestinationData = async (e, _id, getToken) => {
  e.preventDefault();
  const token = await getToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  redirect("/destination");

  // if(data.deletedCount) {
  // }
};

// ----------- Booking Data -----------

export const bookingDataFunc = async (bookingData, value, token) => {
  if (value === null) {
    toast.warn(`Please choose which day you want to book.`, {
      position: "top-center",
      autoClose: 2000,
    });
    return;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  });
  const data = await res.json();

  if (data?.acknowledged) {
    toast.success(`${bookingData.destinationName} Tour Booked Successfully.`, {
      position: "top-center",
      autoClose: 1000,
    });
  }
};

// Cencel Booking Function
export const cencelBooking = async (id, getToken) => {
  const token = await getToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  
  if (data?.deletedCount) {
    toast.success(`Cencel Successfully.`, {
      position: "top-center",
      autoClose: 600,
    });
    redirect("/my-booking");
  }
};
