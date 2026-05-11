export const getAllDestination = async () => {
    const res  =  await fetch('http://localhost:5000/destination');
    const data = await res.json();
    return data
}