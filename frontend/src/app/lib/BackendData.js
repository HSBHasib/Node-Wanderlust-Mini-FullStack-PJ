// Access Data From Destination From - (admin page), than send it to mongodb through backend
export const DestinationFormHandaler = async (e) => {

    e.preventDefault();
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

    // if(data.insertedId) {
    // }
}