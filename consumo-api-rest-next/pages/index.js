"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import LogoutButton from "../components/LogoutButton";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);
  const clearSelection = () => setSelectedCourse(null);

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestión de Cursos</h1>
        <LogoutButton />
      </div>

      <Row>
        <Col md={4}>
          <CourseForm
            selected={selectedCourse}
            refreshData={triggerRefresh}
            clearSelection={clearSelection}
          />
        </Col>
        <Col md={8}>
          <CourseList onEdit={setSelectedCourse} refresh={refresh} />
        </Col>
      </Row>
    </Container>
  );
}
