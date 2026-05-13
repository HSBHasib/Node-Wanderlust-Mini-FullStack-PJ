import { redirect } from "next/navigation";

// Access Data From Destination From - (admin page), than send it to mongodb through backend
export const DestinationFormHandaler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const res = await fetch('http://localhost:5000/destination', {
        method: 'POST',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(destination)
    })

    const data = await res.json();

    if(data.insertedId) {
        form.reset();
    }
}


// Update Destination Data
export const updateDestinationData = async (e, _id) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updateDestination = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
        method: 'PATCH',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(updateDestination)
    })
    const data = await res.json();
    redirect(`/destination/${_id}`)

    // if(data.modifiedCount) {
    // }
}

// Update Destination Data
export const deleteDestinationData = async (e, _id) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
        method: 'DELETE',
        headers:{
            'content-type':'application/json',
        },
    })
    const data = await res.json();
    redirect('/destination')

    // if(data.deletedCount) {
    // }
}