# PRÁCTICA N.º 2: Consumo de una API RESTful desde una Aplicación Frontend

## Fabián Alexander Palma Dueñas

### RESUMEN

En esta práctica se consumió una API RESTful previamente implementada para la gestión de cursos. El frontend fue desarrollado con Next.js, empleando Axios para realizar las solicitudes HTTP y JWT para la autenticación. Se implementó una interfaz de usuario con funcionalidades de login, registro, listado, creación, actualización y eliminación de cursos y gestionando errores.

La estructura del proyecto incluyó componentes reutilizables, servicios centralizados para la comunicación con la API, y estilos modulares. Además, se protegieron las rutas privadas mediante verificación de tokens y se manejaron errores con mensajes para el usuario. En esta práctica se fortaleció el entendimiento del consumo de APIs en aplicaciones distribuidas, permitiendo una integración segura y funcional entre cliente y servidor.

**Palabras clave:** Next.js, JWT, API RESTful, Axios, Express

---

## 1. INTRODUCCIÓN

El objetivo de esta práctica fue integrar un cliente web con una API RESTful previamente construida. La API incluía operaciones CRUD para cursos, autenticación de usuarios y protección de rutas mediante JWT. El desarrollo frontend se centró en consumir estos servicios usando Axios desde una aplicación construida con Next.js.

Se utilizó almacenamiento de tokens en `localStorage`, un interceptor de Axios para enviar el token automáticamente, y un middleware en Express que verifica el JWT antes de permitir el acceso a rutas protegidas. También se implementó manejo de errores tanto en backend como en frontend.

---

## 2. OBJETIVO(S)

### 2.1 Objetivo General:

Consumir una API RESTful protegida mediante JWT desde una aplicación frontend en Next.js.

### 2.2 Objetivos Específicos:

- Implementar login y registro con JWT.
- Listar, crear, actualizar y eliminar cursos desde el cliente.
- Manejar errores de autenticación y validación.
- Utilizar buenas prácticas de arquitectura frontend (componentes, servicios, estilos).
- Proteger rutas en el backend mediante middleware y en frontend mediante redirecciones condicionales.

---

## 3. MARCO TEÓRICO

**Next.js** es un framework de React que permite desarrollar aplicaciones web modernas con funcionalidades como renderizado del lado del servidor (SSR), generación estática de páginas (SSG), y enrutamiento automático basado en la estructura de archivos. Estas características lo convierten en una opción ideal para aplicaciones que requieren rapidez, SEO optimizado y una buena experiencia de usuario.

**Axios** es una biblioteca basada en promesas que facilita el consumo de servicios web. Su uso principal radica en la simplicidad para enviar solicitudes HTTP (GET, POST, PUT, DELETE) y en la capacidad de configurar interceptores para agregar cabeceras automáticamente, como en el caso de los tokens de autenticación.

**JSON Web Token (JWT)** es un estándar abierto (RFC 7519) para el intercambio seguro de información entre partes. En aplicaciones web, se utiliza comúnmente para autenticación: tras validar las credenciales, el servidor genera un token firmado que contiene datos codificados. Este token se almacena en el cliente (por ejemplo, en localStorage) y se incluye en cada solicitud posterior para verificar la identidad del usuario.

**Express** es un framework minimalista para Node.js que permite desarrollar servidores web de manera sencilla. Su sistema de middleware permite procesar las solicitudes entrantes, gestionar rutas, validar tokens JWT y manejar errores de forma centralizada, siendo fundamental en la creación de APIs RESTful.

Estas tecnologías, combinadas, permiten crear aplicaciones distribuidas seguras y funcionales, donde el cliente puede comunicarse con el servidor de forma eficiente, protegiendo las rutas sensibles y gestionando el acceso según la identidad del usuario.

---

### 4. DESCRIPCIÓN DEL PROCEDIMIENTO

**Estructura del Proyecto:**

```
consumo-api-rest-next/
├── components/
│   ├── CourseForm.js
│   ├── CourseList.js
│   └── LogoutButton.js
├── pages/
│   ├── login.js
│   ├── register.js
│   └── index.js
├── services/
│   ├── axiosInstance.js
│   └── courseService.js
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── courseController.js
│   ├── models/
│   │   └── course.js
│   └── routes/
│       └── courseRoutes.js
├── .env
├── .gitignore
├── docker-compose.yml
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

**Preparación Inicial:**

- Se utilizó un backend previamente desarrollado en Node.js con Express y MongoDB.
- Se aseguró que el backend expusiera correctamente los endpoints `/api/auth` y `/api/courses`, y protegiera los accesos mediante JWT.
- Se verificó que el backend estuviera corriendo en `http://localhost:8080`.

**Creación del Proyecto Frontend:**

- Se creó el proyecto con `npx create-next-app`.
- Se instalaron las dependencias necesarias: `axios`, `jsonwebtoken`, y `react-icons` para los estilos.

**Lógica de Autenticación y Seguridad:**

- El login (`login.js`) captura credenciales y hace un `POST` a `/api/auth/login`. Si es exitoso, guarda el token JWT en `localStorage`.
- Un archivo `axiosInstance.js` define una instancia de Axios con un interceptor que adjunta automáticamente el token en el encabezado de cada solicitud.
- Las páginas protegidas (como `index.js`) verifican la existencia del token en `localStorage` y redirigen al login si no está presente.
- En el backend, un middleware verifica la validez del JWT antes de permitir el acceso a rutas de cursos.
  **CRUD de Cursos:**
- `CourseForm.js:` permite crear y editar cursos. Los datos son enviados a la API usando courseService.js.
- `CourseList.js:` obtiene y muestra los cursos llamando a la API con GET /api/courses.
- Se validan campos obligatorios y se manejan errores como cursos duplicados, campos vacíos, etc.

---

### 5. ANÁLISIS DE RESULTADOS

| Acción                           | Resultado Esperado                  | Resultado Obtenido |
| -------------------------------- | ----------------------------------- | ------------------ |
| Login válido                     | Redirección y token almacenado      | ✅ Correcto        |
| Registro de usuario nuevo        | Usuario creado, redirección a login | ✅ Correcto        |
| Listado de cursos                | Cursos visibles tras login          | ✅ Correcto        |
| Creación de curso                | Curso añadido a la base de datos    | ✅ Correcto        |
| Edición de curso                 | Curso actualizado correctamente     | ✅ Correcto        |
| Eliminación de curso             | Curso eliminado sin errores         | ✅ Correcto        |
| Error por credenciales inválidas | Alerta visible en pantalla          | ✅ Correcto        |
| Token inválido o expirado        | Redirección o error controlado      | ✅ Correcto        |

---

### 6. GRÁFICOS O FOTOGRAFÍAS

![GET All Courses](https://i.imgur.com/HeEPs7B.png)
_Figura 1: Formulario de acceso al sistema con validación y mensajes de error._

![GET All Courses](https://i.imgur.com/NU1cjSe.png)
_Figura 2: Creación de usuarios nuevos con validación de campos._

![GET All Courses](https://i.imgur.com/goEyAU7.png)
_Figura 3: Interfaz principal que muestra los cursos obtenidos desde la API protegida._

![GET All Courses](https://i.imgur.com/U327sCf.png)
_Figura 4: Formulario utilizado para registrar o editar información de cursos._

![GET All Courses](https://i.imgur.com/PMJYjUT.png)
_Figura 5: Notificación mostrada cuando el token (token modificado) ha expirado o es inválido._

![GET All Courses](https://i.imgur.com/GfUKRjp.png)
_Figura 6: Vista desde herramientas del navegador mostrando el token JWT guardado._

---

### 7. DISCUSIÓN

La integración del frontend con el backend previamente desarrollado evidenció la importancia de una arquitectura clara y modular. El uso de Axios con interceptores facilitó la autenticación automática. El middleware del backend evitó accesos no autorizados y el almacenamiento del token en `localStorage` permitió persistencia entre sesiones (aunque se reconoce que para mayor seguridad se recomienda usar cookies httpOnly en producción).

Los errores fueron manejados cuidadosamente en cada capa. Por ejemplo, si la API devolvía un error 400 o 401, se mostraba un mensaje amigable sin romper el flujo de la aplicación. Esto mejoró la experiencia del usuario.

---

### 8. CONCLUSIONES

- Se consumió exitosamente una API RESTful protegida desde un frontend Next.js.
- Se implementó autenticación JWT, protección de rutas y almacenamiento del token en `localStorage`.
- Se aplicó una arquitectura modular con separación de lógica, UI y servicios.
- Se manejaron los errores de forma controlada, brindando retroalimentación visual clara al usuario.
- Se comprendieron los flujos de autenticación y autorización en aplicaciones cliente-servidor.

---

### 9. BIBLIOGRAFÍA

- [https://nextjs.org/docs](https://nextjs.org/docs)
- [https://axios-http.com](https://axios-http.com)
- [https://jwt.io/introduction](https://jwt.io/introduction)
- [https://developer.mozilla.org/es/docs/Web/HTTP/Status](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
- Documentación interna: API RESTful para Gestión de Cursos (Palma Dueñas, 2025)
- [https://expressjs.com/es/](https://expressjs.com/es/)
- [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/)
