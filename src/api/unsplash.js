import axios from 'axios';

export default axios.create({
  headers: {
    Authorization:
      'Client-ID b9dec42780256075f35762a1e11edf6518be40fe9f1a333167161d3b865fb2d6'
  },
  baseURL: 'https://api.unsplash.com'
});
