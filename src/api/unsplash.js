import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID SNJ0vbAymInr_8JfAB5fsMFtSDrKHkmcmAsNURcByg0'
  }
})
