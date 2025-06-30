"use client";

import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import axiosInstance from "../services/axiosInstance"; // ✅ aquí va el import correcto

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Validación básica
    if (formData.password !== formData.confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      setMessageType("danger");
      setIsSubmitting(false);
      return;
    }

    if (formData.password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      setMessageType("danger");
      setIsSubmitting(false);
      return;
    }

    try {
      const { data } = await axiosInstance.post("/auth/register", {
        email: formData.email,
        password: formData.password,
      });

      setMessage("Usuario registrado exitosamente. Redirigiendo al login...");
      setMessageType("success");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Error al registrar usuario");
      } else {
        setMessage(
          "Error de conexión. Verifica que el servidor esté funcionando."
        );
      }
      setMessageType("danger");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card>
              <Card.Header className="text-center">
                <h3 className="mb-0">Crear Cuenta</h3>
              </Card.Header>
              <Card.Body>
                {message && <Alert variant={messageType}>{message}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Mínimo 6 caracteres"
                      required
                      minLength={6}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repite tu contraseña"
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Registrando..." : "Crear Cuenta"}
                    </Button>
                  </div>
                </Form>

                <hr className="my-4" />

                <div className="text-center">
                  <p className="mb-0">
                    ¿Ya tienes cuenta?{" "}
                    <Link href="/login" className="text-decoration-none">
                      Iniciar Sesión
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
