require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./src/routes/courseRoutes");

const app = express();
app.use(express.json());

// Construir URI dinámicamente
const {
  DB_PROTOCOL,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_AUTH_SOURCE,
  PORT,
} = process.env;

const mongoURI = `${DB_PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_AUTH_SOURCE}`;

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Conexión exitosa a MongoDB"))
  .catch((error) => console.error("❌ Error de conexión a MongoDB:", error));

// Rutas
app.use("/api/courses", courseRoutes);

// Inicio del servidor
app.listen(PORT || 3000, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT || 3000}`);
});
