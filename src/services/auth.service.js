import axios from "axios";

const API_URL = import.meta.env.BACKEND_API;

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const signup = async (credentials) => {
  return axios.post(`${API_URL}/signup`, credentials);
};

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  return axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const logout = () => {
  localStorage.removeItem("token");
};
