import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://unique-resume.onrender.com",
});

export default axiosInstance;
