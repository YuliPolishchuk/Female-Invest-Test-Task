import axios from "axios";

const api = axios.create({
  //http://10.0.2.2:3000 for adnroid emulator
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
