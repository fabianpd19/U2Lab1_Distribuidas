// pages/login.js
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";
import Link from "next/link"; // ✅ IMPORT NECESARIO

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      router.push("/");
    } catch (error) {
      // Captura robusta del error
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Error del servidor con respuesta
          setError(error.response.data?.message || "Credenciales incorrectas.");
        } else if (error.request) {
          // No hubo respuesta
          setError("No se pudo contactar al servidor.");
        } else {
          // Otro error relacionado a la solicitud
          setError("Error desconocido al hacer la solicitud.");
        }
      } else {
        // Error completamente inesperado (puede evitar que Next.js muestre el rojo)
        console.error("Error inesperado:", error);
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4">Iniciar Sesión</h3>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? "Iniciando sesión..." : "Ingresar"}
                </Button>
              </Form>
              <hr className="my-4" />
              <div className="text-center">
                <p className="mb-0">
                  ¿No tienes cuenta?{" "}
                  <Link href="/register" className="text-decoration-none">
                    Regístrate aquí
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
