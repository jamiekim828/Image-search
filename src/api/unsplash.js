import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID RwmHXGt72v7lqBPyHRnAAu-ix4B4lSbBq3b1NubFtyQ',
  },
});
