import axios from 'axios';
const KEY = 'AIzaSyAHQydj3HY_hrU3XwDpROKABTEYYvoaf0U';

export const API_DEFAULT_PARAMS = {
    part: 'snippet',
    maxResults: 5,
    key: KEY

}
export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
  
});