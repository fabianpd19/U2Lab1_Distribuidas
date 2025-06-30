import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { createCourse, updateCourse } from "../services/courseService";

const initialState = {
  title: "",
  description: "",
  numberOfTopics: 0,
  publishedAt: "",
};

const CourseForm = ({ selected, refreshData, clearSelection }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (selected) {
      setFormData({ ...selected });
    } else {
      setFormData(initialState);
    }
  }, [selected]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selected) {
      await updateCourse(selected._id, formData);
    } else {
      await createCourse(formData);
    }
    refreshData();
    clearSelection();
    setFormData(initialState);
  };

  return (
    <div>
      <h4>{selected ? "Editar Curso" : "Nuevo Curso"}</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Título</Form.Label>
          <Form.Control
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Temas</Form.Label>
          <Form.Control
            type="number"
            name="numberOfTopics"
            value={formData.numberOfTopics}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Fecha Publicación</Form.Label>
          <Form.Control
            type="date"
            name="publishedAt"
            value={formData.publishedAt?.split("T")[0] || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Guardar
        </Button>{" "}
        {selected && (
          <Button variant="secondary" onClick={clearSelection}>
            Cancelar
          </Button>
        )}
      </Form>
    </div>
  );
};

export default CourseForm;
