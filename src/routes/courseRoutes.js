const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const auth = require("../middleware/auth");

// ✅ Rutas públicas
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);

// 🔐 Rutas protegidas con autenticación JWT
router.post("/", auth, courseController.createCourse);
router.put("/:id", auth, courseController.updateCourse);
router.delete("/:id", auth, courseController.deleteCourse);

module.exports = router;
