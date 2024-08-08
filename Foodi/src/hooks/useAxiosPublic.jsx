import axios from "axios";

// Retrieve the base URL from environment variables or fallback to localhost
const baseUrl = "http://localhost:5173";

// Create an axios instance with the base URL
const axiosPublic = axios.create({
  baseURL: baseUrl,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
