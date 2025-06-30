"use client";

import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    if (confirm("¿Cerrar sesión?")) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  };

  return (
    <Button variant="outline-secondary" onClick={handleLogout}>
      Cerrar sesión
    </Button>
  );
}
