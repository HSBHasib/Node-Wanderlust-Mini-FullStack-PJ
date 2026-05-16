// -------- Destination Data --------

export const getAllDestination = async () => {
    const res  =  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const data = await res.json();
    return data
}

export const getFeaturedDestination = async () => {
    const res  =  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const data = await res.json();
    return data
}

export const getDestinationById = async (id, token) => {
    const res  =  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data
}


// -------- Booking Data --------
export const getBookingData = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data
}
