# API Caballeros del Zodiaco

Este proyecto es una aplicación full-stack para gestionar personajes de la serie "Los Caballeros del Zodiaco". Consiste en un backend desarrollado en Java con Spring Boot (arquitectura de microservicios) y un frontend en React con Vite.

## Descripción

La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre personajes de Los Caballeros del Zodiaco. El backend está dividido en microservicios independientes para cada operación, conectados a una base de datos MongoDB. El frontend proporciona una interfaz de usuario para interactuar con la API.

## Características

- **Microservicios Backend**: Servicios separados para consultar, insertar, actualizar y eliminar personajes.
- **Documentación API**: Integración con Swagger para documentación interactiva de la API.
- **Frontend React**: Interfaz moderna para gestionar personajes con formularios y listas.
- **Base de Datos MongoDB**: Almacenamiento NoSQL para los datos de personajes.
- **Configuración de Entorno**: Uso de variables de entorno con System.getenv (compatible con Docker).
- **CORS Configurado**: Soporte para solicitudes desde el frontend.
- **Dockerización**: Todos los microservicios incluyen Dockerfiles para fácil despliegue.

## Tecnologías Utilizadas

### Backend
- **Java 21**
- **Spring Boot 3.3.4**
- **Spring Data MongoDB**
- **Maven** para gestión de dependencias
- **Lombok** para reducción de código boilerplate
- **Dotenv** para variables de entorno

### Frontend
- **React 18**
- **Vite 5.3.4** como bundler y servidor de desarrollo
- **Axios** para llamadas HTTP a la API
- **ESLint** para linting

### Base de Datos
- **MongoDB**

### Documentación
- **Swagger/OpenAPI 3.0**

## Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalados:

- **Java 21** o superior
- **Node.js** (versión 18 o superior) y **npm**
- **MongoDB** (local o en la nube, como MongoDB Atlas)
- **Maven** (viene incluido con muchas instalaciones de Java)

## Instalación

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd Api-Caballeros-Zodiaco
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz de cada microservicio backend (dentro de `backend-java/*/src/main/resources/` o en el directorio raíz del proyecto) con las siguientes variables:

```
MONGO_HOST=localhost
MONGO_USER=tu_usuario_mongo
MONGO_PASS=tu_contraseña_mongo
MONGO_DB=caballeros_zodiaco
```

Ajusta los valores según tu configuración de MongoDB. Para despliegue con Docker, configura estas variables en tu entorno de contenedores.

### 3. Instalar Dependencias del Frontend

```bash
cd frontend/caballeros
npm install
```

### 4. Compilar y Ejecutar los Microservicios Backend

Para cada microservicio, ejecuta los siguientes comandos desde su directorio raíz:

```bash
cd backend-java/<nombre-del-microservicio>
mvn clean install
mvn spring-boot:run
```

Los microservicios se ejecutan en los siguientes puertos:
- **Consultar Personajes**: `http://localhost:8081`
- **Insertar Personajes**: `http://localhost:8080`
- **Actualizar Personajes**: `http://localhost:8082`
- **Eliminar Personajes**: `http://localhost:8083`
- **Documentación Swagger**: `http://localhost:8084` (o el puerto configurado)

### 5. Ejecutar el Frontend

```bash
cd frontend/caballeros
npm run dev
```

El frontend estará disponible en `http://localhost:5173` (puerto por defecto de Vite).

## Uso

1. Asegúrate de que todos los microservicios backend estén ejecutándose.
2. Abre el frontend en tu navegador.
3. Desde la interfaz, puedes:
   - Ver la lista de personajes existentes.
   - Agregar nuevos personajes.
   - Editar personajes existentes.
   - Eliminar personajes.

Para acceder a la documentación de la API, visita `http://localhost:8085/swagger-ui.html` (ajusta el puerto según tu configuración).

## Endpoints de la API

La API proporciona los siguientes endpoints principales:

- **GET /consultar-personajes**: Obtiene todos los personajes.
- **POST /insertar-personajes**: Crea un nuevo personaje.
- **PUT /actualizar-personajes/{id}**: Actualiza un personaje por ID.
- **DELETE /eliminar-personajes/{id}**: Elimina un personaje por ID.

### Modelo de Personaje

```json
{
  "id": "string",
  "nombre": "string",
  "edad": "integer",
  "altura": "number",
  "constelacion": "string",
  "urlImagen": "string"
}
```

Para más detalles, consulta la documentación Swagger.

## Estructura del Proyecto

```
Api-Caballeros-Zodiaco/
├── backend-java/
│   ├── consultar-personajes/
│   ├── insertar-personajes/
│   ├── actualizar-personajes/
│   ├── eliminar-personajes/
│   └── documentacion-swagger/
├── frontend/
│   └── caballeros/
└── README.md
```



## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
