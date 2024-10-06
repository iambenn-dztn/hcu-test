import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use((res) => {
  return res;
});

export { axiosInstance };
