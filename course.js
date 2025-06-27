const mongoose = require("mongoose");
const { Schema } = mongoose;
// 1. Definir el schema
const courseSchema = new Schema({
  // _id: ObjectId: Identificador único de tu documento
  title: {
    type: String,
    required: true, // Campo obligatorio
  },
  description: {
    type: String,
    minlength: [10, "No se cumple con la longitud mínima de 10 caracteres"], // Longitud mínima de 10 caracteres
    maxlength: 300, // Longitud máxima de 500 caracteres
  },
  numberOfTopics: {
    type: Number,
    default: 0, // Valor por defecto si no se proporciona
    min: 0, // Valor mínimo permitido
    max: 40, // Valor máximo permitido
  },
  publishedAt: Date,
});

courseSchema.virtual("info");

/* 
validate
save
remove
updateOne
DeleteOne
init => async
*/
/* courseSchema.post('remove');
courseSchema.pre('save'); */

// 2. Crear el modelo
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
