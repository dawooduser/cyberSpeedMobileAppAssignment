import {API_KEY} from "@env"
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        "Content-Type": "application/json",
        "accept": 'application/json',
        "Authorization": `Bearer ${API_KEY}`
      }
  });
  
axiosInstance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
  export default axiosInstance