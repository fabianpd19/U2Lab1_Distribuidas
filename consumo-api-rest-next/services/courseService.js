// services/courseService.js
import axios from "axios";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/courses",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

/* export const getCourses = () => axios.get(API_URL);
export const getCourse = (id) => axios.get(`${API_URL}/${id}`);
export const createCourse = (data) => axios.post(API_URL, data);
export const updateCourse = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCourse = (id) => axios.delete(`${API_URL}/${id}`); */

export const createCourse = (data) => axiosInstance.post("/", data);
export const getCourses = () => axios.get("http://localhost:8080/api/courses"); // público
export const updateCourse = (id, data) => axiosInstance.put(`/${id}`, data);
export const deleteCourse = (id) => axiosInstance.delete(`/${id}`);
