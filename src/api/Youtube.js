import axios from 'axios';

const KEY = 'AIzaSyA_Z6Zu2PG0j7rG1ExymEtYSGnMhUV_AMs';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }    
})