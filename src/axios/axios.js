import axios from "axios";
import { baseURL } from "../constants/constant";

const instance = axios.create({
  baseURL: baseURL,
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      const admintoken = localStorage.getItem("admintoken");
      if (admintoken) {
        config.headers["Authorization"] = `Bearer ${admintoken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
