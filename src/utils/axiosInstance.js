import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://unique-resumeserver.vercel.app",
});

export default axiosInstance;
