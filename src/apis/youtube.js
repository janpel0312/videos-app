import axios from 'axios';

const KEY = 'AIzaSyCLLwbXzr0Tb56iD7AHB4iFpnPJ2TNHe7w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});