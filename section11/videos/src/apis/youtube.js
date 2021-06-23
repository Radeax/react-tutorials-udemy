import axios from 'axios';

const KEY = 'AIzaSyDGNYGkUZ5WHgyctr5FFzxIAFNtd8CudZI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
