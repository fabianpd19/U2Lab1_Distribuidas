"use client";

import { Table, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../services/courseService";

const CourseList = ({ onEdit, refresh }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [refresh]);

  const handleDelete = async (id) => {
    if (confirm("¿Eliminar este curso?")) {
      try {
        await deleteCourse(id);
        fetchCourses();
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  if (loading) {
    return (
      <Card>
        <Card.Body className="text-center">
          <p>Cargando...</p>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Header>
        <h5 className="mb-0">Lista de Cursos ({courses.length})</h5>
      </Card.Header>
      <Card.Body className="p-0">
        {courses.length === 0 ? (
          <div className="p-4 text-center text-muted">
            <p>No hay cursos disponibles</p>
          </div>
        ) : (
          <Table responsive className="mb-0">
            <thead className="table-light">
              <tr>
                <th>Título</th>
                <th className="d-none d-md-table-cell">Descripción</th>
                <th>Temas</th>
                <th className="d-none d-lg-table-cell">Publicado</th>
                <th width="150">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id}>
                  <td>{course.title}</td>
                  <td className="d-none d-md-table-cell">
                    {course.description
                      ? course.description.length > 60
                        ? course.description.substring(0, 60) + "..."
                        : course.description
                      : "-"}
                  </td>
                  <td>{course.numberOfTopics}</td>
                  <td className="d-none d-lg-table-cell">
                    {course.publishedAt
                      ? new Date(course.publishedAt).toLocaleDateString()
                      : "No publicado"}
                  </td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => onEdit(course)}
                      className="me-1"
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(course._id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default CourseList;
