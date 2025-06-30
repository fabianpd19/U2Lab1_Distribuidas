// services/courseService.js
import axios from "axios";
import axiosInstance from "./axiosInstance";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

/* export const getCourses = () => axios.get(API_URL);
export const getCourse = (id) => axios.get(`${API_URL}/${id}`);
export const createCourse = (data) => axios.post(API_URL, data);
export const updateCourse = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCourse = (id) => axios.delete(`${API_URL}/${id}`); */

export const createCourse = (data) => axiosInstance.post("/courses", data);
export const getCourses = () => axiosInstance.get("/courses");
export const updateCourse = (id, data) =>
  axiosInstance.put(`/courses/${id}`, data);
export const deleteCourse = (id) => axiosInstance.delete(`/courses/${id}`);
