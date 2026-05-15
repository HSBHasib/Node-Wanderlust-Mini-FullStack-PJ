// -------- Destination Data --------

export const getAllDestination = async () => {
    const res  =  await fetch('http://localhost:5000/destination');
    const data = await res.json();
    return data
}

export const getDestinationById = async (id, token) => {
    const res  =  await fetch(`http://localhost:5000/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data
}


// -------- Booking Data --------
export const getBookingData = async (id, token) => {
    const res = await fetch(`http://localhost:5000/booking/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data
}


