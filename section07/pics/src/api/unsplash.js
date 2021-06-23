import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID C6crUP22mx4jHKOvjPLRz4LiOgx5l9BpRPYe4vULh_M',
  },
});
