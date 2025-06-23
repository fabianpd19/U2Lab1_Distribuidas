const mongoose = require("mongoose");
const { Schema } = mongoose;
// 1. Definir el schema
const courseSchema = new Schema({
  // _id: ObjectId: Identificador único de tu documento
  title: {
    type: String,
  },
  description: String,
  numberOfTopics: {
    type: Number,
    default: 0, // Valor por defecto si no se proporciona
  },
  publishedAt: Date,
});

// 2. Crear el modelo
const Course = mongoose.model("Course", courseSchema);
