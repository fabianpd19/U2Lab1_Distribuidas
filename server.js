const express = require("express");
const mongoose = require("mongoose");
require("./course"); // Import the course model to ensure it's registered
// Cadena de conexión con credenciales
const connectionString =
  "mongodb://admin:password123@localhost:27017/espe-mongoose";
mongoose.connect(connectionString, () => {
  try {
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
  }
});

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(8080, () => console.log("Servidor iniciado"));
