# API RESTful para Gestión de Cursos con MongoDB y Mongoose

## Fabián Alexander Palma Dueñas

## RESUMEN

En este laboratorio se desarrolló una API RESTful completa para la gestión de cursos académicos utilizando Node.js con Express.js como framework backend y MongoDB como base de datos NoSQL. La implementación integra Mongoose como ORM para facilitar la interacción con la base de datos, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de manera eficiente. El proyecto incluye la containerización de MongoDB usando Docker Compose para garantizar un entorno de desarrollo consistente y reproducible. Se implementaron todos los endpoints necesarios para la gestión completa de cursos, incluyendo validaciones de datos y manejo de errores. La API fue validada exitosamente mediante pruebas con herramientas como Postman, demostrando su funcionalidad completa y robustez. El proyecto representa una solución moderna y escalable para aplicaciones web que requieren gestión de datos académicos.

**Palabras Claves:** API RESTful, MongoDB, Mongoose

## 1. INTRODUCCIÓN

El desarrollo de APIs RESTful representa uno de los pilares fundamentales en la arquitectura de aplicaciones web modernas. Este laboratorio se enfocó en la construcción de una API completa para la gestión de cursos académicos, integrando tecnologías actuales del ecosistema Node.js. La práctica permitió consolidar conocimientos sobre el desarrollo backend, especialmente en el uso de bases de datos NoSQL y ORMs, aspectos esenciales para el manejo eficiente de datos en aplicaciones distribuidas. El objetivo principal fue demostrar las capacidades técnicas para crear soluciones robustas y escalables que cumplan con los estándares de la industria.

## 2. OBJETIVOS

### 2.1 Objetivo General

Desarrollar una API RESTful funcional para la gestión de cursos utilizando Express.js, MongoDB y Mongoose, implementando operaciones CRUD completas y validando su funcionamiento mediante herramientas de testing.

### 2.2 Objetivos Específicos

- Configurar un entorno de desarrollo con Node.js, Express.js y MongoDB containerizado
- Implementar un modelo de datos utilizando Mongoose con validaciones apropiadas
- Crear controladores y rutas para todas las operaciones CRUD
- Establecer una arquitectura de proyecto organizada y mantenible
- Validar la funcionalidad de la API mediante pruebas exhaustivas

## 3. MARCO TEÓRICO

### API RESTful

REST (Representational State Transfer) es un estilo arquitectónico para el diseño de servicios web que utiliza los métodos HTTP estándar (GET, POST, PUT, DELETE) para realizar operaciones sobre recursos identificados por URLs. Las APIs RESTful siguen principios como la ausencia de estado, la interfaz uniforme y la arquitectura cliente-servidor.

### MongoDB

MongoDB es una base de datos NoSQL orientada a documentos que almacena datos en formato BSON (Binary JSON). Ofrece flexibilidad en el esquema de datos, escalabilidad horizontal y alto rendimiento para aplicaciones modernas que manejan grandes volúmenes de datos no estructurados.

### Mongoose

Mongoose es un Object Document Mapper (ODM) para MongoDB y Node.js que proporciona una solución directa y basada en esquemas para modelar datos de aplicación. Incluye validación integrada, consultas, middleware y más, facilitando el trabajo con MongoDB desde aplicaciones Node.js.

### Express.js

Express.js es un framework web minimalista y flexible para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles. Facilita la creación de APIs y aplicaciones web con una arquitectura MVC clara.

## 4. DESCRIPCIÓN DEL PROCEDIMIENTO

### 4.1 Configuración del Entorno

Se configuró un entorno de desarrollo completo iniciando con la creación del proyecto Node.js y la instalación de dependencias necesarias: Express.js para el servidor web, Mongoose para la interacción con MongoDB, y dotenv para el manejo de variables de entorno.

### 4.2 Containerización de la Base de Datos

Se implementó Docker Compose para containerizar MongoDB junto con Mongo Express como interfaz de administración. Esta configuración garantiza un entorno consistente y facilita la gestión de la base de datos durante el desarrollo.

### 4.3 Modelado de Datos

Se definió el modelo Course utilizando Mongoose Schema con los siguientes campos:

- title: Campo obligatorio de tipo String
- description: Campo opcional con validaciones de longitud (10-300 caracteres)
- numberOfTopics: Campo numérico con valor por defecto 0 y rango 0-40
- publishedAt: Campo de fecha opcional

### 4.4 Implementación de Controladores

Se desarrollaron controladores específicos para cada operación CRUD:

- createCourse: Creación de nuevos cursos
- getAllCourses: Obtención de todos los cursos
- getCourseById: Obtención de curso específico por ID
- updateCourse: Actualización de cursos existentes
- deleteCourse: Eliminación de cursos

### 4.5 Configuración de Rutas

Se establecieron las rutas RESTful siguiendo las convenciones estándar:

- POST /api/courses - Crear curso
- GET /api/courses - Listar todos los cursos
- GET /api/courses/:id - Obtener curso específico
- PUT /api/courses/:id - Actualizar curso
- DELETE /api/courses/:id - Eliminar curso

## 5. ANÁLISIS DE RESULTADOS

La implementación resultó en una API completamente funcional que cumple con todos los requisitos establecidos. Se verificó el correcto funcionamiento de todas las operaciones CRUD mediante pruebas sistemáticas. La conexión con MongoDB se estableció exitosamente utilizando las variables de entorno configuradas. Las validaciones del modelo funcionan correctamente, rechazando datos que no cumplen con los criterios establecidos. La arquitectura del proyecto sigue las mejores prácticas de organización, facilitando el mantenimiento y escalabilidad del código.

| Endpoint          | Método | Funcionalidad    | Estado       |
| ----------------- | ------ | ---------------- | ------------ |
| /api/courses      | POST   | Crear curso      | ✅ Funcional |
| /api/courses      | GET    | Listar cursos    | ✅ Funcional |
| /api/courses/\:id | GET    | Obtener curso    | ✅ Funcional |
| /api/courses/\:id | PUT    | Actualizar curso | ✅ Funcional |
| /api/courses/\:id | DELETE | Eliminar curso   | ✅ Funcional |

## 6. GRÁFICOS O FOTOGRAFÍAS

### 6.1 Estructura del Proyecto

```
.
├── node_modules/                  # Dependencias instaladas del proyecto
├── src/                           # Carpeta principal del código fuente
│   ├── controllers/               # Controladores de lógica de negocio
│   │   └── courseController.js    # Controlador para operaciones de cursos
│   ├── models/                    # Definición de modelos de datos
│   │   └── course.js              # Modelo de curso (ORM/Mongoose)
│   └── routes/                    # Definición de rutas de la API
│       └── courseRoutes.js        # Rutas relacionadas con los cursos
├── .env                           # Variables de entorno (configuración sensible)
├── .gitignore                     # Archivos y carpetas ignorados por Git
├── docker-compose.yml            # Configuración de servicios con Docker
├── package-lock.json             # Registro de versiones exactas de dependencias
├── package.json                  # Metadatos del proyecto y scripts npm
├── README.md                     # Documentación del proyecto
└── server.js                     # Archivo principal del servidor (entry point)

```

### 6.2 Configuración y Conexión

![Servidor Iniciado](https://imgur.com/0kfB5fF.png)
_Figura 2: Servidor Express ejecutándose y conexión exitosa a MongoDB_

![Docker Containers](https://imgur.com/gIWH9SL.png)
_Figura 3: Contenedores Docker ejecutándose (MongoDB y Mongo Express)_

### 6.3 Pruebas de Endpoints con Postman

#### POST /api/courses - Crear Curso

![POST Create Course](https://i.imgur.com/cJhTJRv.png)
_Figura 4: Creación exitosa de un nuevo curso_

![POST Validation Error](https://i.imgur.com/9VUIZwg.png)
_Figura 5: Error de validación al crear curso con datos inválidos_

#### GET /api/courses - Listar Cursos

![GET All Courses](https://i.imgur.com/o9aTaN8.png)
_Figura 6: Obtención de todos los cursos disponibles_

#### GET /api/courses/:id - Obtener Curso Específico

![GET Course by ID](https://imgur.com/h2hYGCt.png)
_Figura 7: Obtención de curso específico por ID_

#### PUT /api/courses/:id - Actualizar Curso

![PUT Update Course](https://imgur.com/sthzznp.png)
_Figura 8: Actualización exitosa de un curso existente_

#### DELETE /api/courses/:id - Eliminar Curso

![DELETE Course](https://imgur.com/uWGL43E.png)
![COMPROBACION DELETE](https://imgur.com/8WwRJNN.png)
_Figura 9: Eliminación exitosa de un curso_

### 6.4 Base de Datos MongoDB

#### MongoDB Compass - Vista General

![Mongo Compass Dashboard](https://imgur.com/miwNPHI.png)
_Figura 10: Panel de administración de Mongo Express_

#### Colección de Cursos

![Courses Collection](https://imgur.com/OfhWbDn.png)
_Figura 11: Documentos almacenados en la colección courses_

#### Documento Individual

![Course Document](https://imgur.com/EfjbXNZ.png)
_Figura 12: Estructura detallada de un documento curso_

## 7. DISCUSIÓN

La implementación exitosa de esta API RESTful demuestra la efectividad de utilizar Mongoose como ODM para MongoDB. Las ventajas observadas incluyen la facilidad para definir esquemas con validaciones, la simplificación de las consultas a la base de datos, y la reducción significativa de código boilerplate comparado con el uso directo del driver nativo de MongoDB.

La arquitectura MVC implementada proporciona una separación clara de responsabilidades, facilitando el mantenimiento y la escalabilidad del proyecto. El uso de Docker Compose para la containerización de MongoDB elimina problemas de configuración y garantiza consistencia entre diferentes entornos de desarrollo.

Las validaciones implementadas en el modelo Course aseguran la integridad de los datos, mientras que el manejo adecuado de errores proporciona respuestas informativas al cliente. La configuración con variables de entorno mejora la seguridad y flexibilidad del despliegue.

## 8. CONCLUSIONES

- Se desarrolló exitosamente una API RESTful completa utilizando Express.js y MongoDB con Mongoose, cumpliendo todos los objetivos planteados.

- La implementación de Mongoose como ODM facilitó significativamente el trabajo con MongoDB, proporcionando validaciones automáticas y una interfaz más intuitiva para las operaciones de base de datos.

- La arquitectura MVC adoptada demostró ser efectiva para organizar el código de manera mantenible y escalable, separando claramente las responsabilidades entre modelos, controladores y rutas.

- La containerización con Docker Compose probó ser una solución eficiente para el manejo del entorno de base de datos, garantizando consistencia y facilitando el despliegue.

- Las pruebas realizadas confirmaron el correcto funcionamiento de todas las operaciones CRUD, validando la robustez y confiabilidad de la API desarrollada.

- El proyecto representa una base sólida para el desarrollo de aplicaciones más complejas que requieran gestión de datos académicos o similares.

## 9. BIBLIOGRAFÍA

- Mongoose Documentation. (2024). Mongoose ODM v8.0. MongoDB Inc. https://mongoosejs.com/docs/guide.html. Consultado: Junio 2025.

- Express.js Documentation. (2024). Express - Node.js web application framework. OpenJS Foundation. https://expressjs.com/. Consultado: Junio 2025.

- MongoDB Documentation. (2024). MongoDB Manual. MongoDB Inc. https://docs.mongodb.com/manual/. Consultado: Junio 2025.

- Docker Documentation. (2024). Docker Compose Overview. Docker Inc. https://docs.docker.com/compose/. Consultado: Junio 2025.

- Node.js Documentation. (2024). Node.js v20.x API Documentation. OpenJS Foundation. https://nodejs.org/api/. Consultado: Junio 2025.

- Postman Documentation. (2024). Postman Learning Center. Postman Inc. https://learning.postman.com/. Consultado: Junio 2025.
