import { Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../services/courseService";

const CourseList = ({ onEdit, refresh }) => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const response = await getCourses();
    setCourses(response.data);
  };

  useEffect(() => {
    fetchCourses();
  }, [refresh]);

  const handleDelete = async (id) => {
    if (confirm("¿Eliminar este curso?")) {
      await deleteCourse(id);
      fetchCourses();
    }
  };

  return (
    <div>
      <h4>Listado de Cursos</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Temas</th>
            <th>Publicado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.numberOfTopics}</td>
              <td>
                {course.publishedAt
                  ? new Date(course.publishedAt).toLocaleDateString()
                  : "-"}
              </td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => onEdit(course)}
                >
                  Editar
                </Button>{" "}
                <Button
                  variant="danger"
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
    </div>
  );
};

export default CourseList;
