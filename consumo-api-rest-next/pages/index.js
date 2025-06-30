import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);
  const clearSelection = () => setSelectedCourse(null);

  return (
    <Container className="py-4">
      <Row>
        <Col md={5}>
          <CourseForm
            selected={selectedCourse}
            refreshData={triggerRefresh}
            clearSelection={clearSelection}
          />
        </Col>
        <Col md={7}>
          <CourseList onEdit={setSelectedCourse} refresh={refresh} />
        </Col>
      </Row>
    </Container>
  );
}
