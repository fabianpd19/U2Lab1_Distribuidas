"use client";

import { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { createCourse, updateCourse } from "../services/courseService";

const initialState = {
  title: "",
  description: "",
  numberOfTopics: 0,
  publishedAt: "",
};

const CourseForm = ({ selected, refreshData, clearSelection }) => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selected) {
      setFormData({ ...selected });
    } else {
      setFormData(initialState);
    }
    setMessage("");
  }, [selected]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      if (selected) {
        await updateCourse(selected._id, formData);
        setMessage("Curso actualizado correctamente");
      } else {
        await createCourse(formData);
        setMessage("Curso creado correctamente");
      }

      refreshData();
      clearSelection();
      setFormData(initialState);

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Error al guardar el curso");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <Card.Header>
        <h5 className="mb-0">{selected ? "Editar Curso" : "Nuevo Curso"}</h5>
      </Card.Header>
      <Card.Body>
        {message && (
          <Alert variant={message.includes("Error") ? "danger" : "success"}>
            {message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Título del curso"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Descripción del curso"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Número de Temas</Form.Label>
            <Form.Control
              type="number"
              name="numberOfTopics"
              min="0"
              value={formData.numberOfTopics}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha de Publicación</Form.Label>
            <Form.Control
              type="date"
              name="publishedAt"
              value={formData.publishedAt?.split("T")[0] || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </Button>
            {selected && (
              <Button variant="secondary" onClick={clearSelection}>
                Cancelar
              </Button>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CourseForm;
