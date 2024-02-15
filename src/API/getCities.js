import axios from 'axios';

export async function getCities(){
    const tours = await axios.get("https://api.mock.turpal.com/api/cities");
    console.log(tours);
    return tours ? tours.data : null;
}