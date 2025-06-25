const express = require("express");
const mongoose = require("mongoose");
require("./course"); // Import the course model to ensure it's registered
// Cadena de conexión con credenciales
const connectionString =
  "mongodb://admin:password123@localhost:27017/espe-mongoose?authSource=admin";
// Utilizando async/await para conectar a MongoDB
mongoose
  .connect(connectionString)
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((error) => console.error("Error de conexión a MongoDB:", error));

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/course", async (req, res) => {
  const Course = mongoose.model("Course");
  Course.create({
    title: "Curso de Mongoose",
    description: "Curso de Mongoose para aprender a manejar bases de datos",
    numberOfTopics: 10,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((error) => {
      console.log("Error al crear el curso:", error);
      res.json(error);
    });
});

app.listen(8080, () => console.log("Servidor iniciado"));
