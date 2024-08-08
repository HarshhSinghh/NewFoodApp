import axios from "axios";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5173",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}}`;
      return config;
    },
    function (error) {
      return Promise.reject.error;
    }
  );

  axiosSecure.interceptors.request.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        await logout();
        navigate("/");
      }
      return Promise.reject.error;
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
