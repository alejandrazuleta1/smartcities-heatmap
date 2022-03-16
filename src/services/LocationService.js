import axios from 'axios';

export const getLocations = async () => {
    const data = await axios.get('http://localhost:5000/points');
    console.log(data.data)
    return data.data
};