# TODO: Correcciones para Despliegue en Render

## Problemas Identificados
- Inconsistencias en configuración de variables de entorno (algunos usan Dotenv, otros System.getenv).
- Dockerfiles faltantes para insertar-personajes, eliminar-personajes, documentacion-swagger.
- Puertos inconsistentes (algunos usan SERVER_PORT, otros PORT).
- URLs incorrectas en frontend (consultar mal escrita, localhost en producción).
- Dependencias java-dotenv comentadas pero usadas en código.

## Tareas Completadas
- [x] Unificar configuración de variables de entorno en todos los servicios (usar System.getenv para Render).
- [x] Crear Dockerfile para insertar-personajes.
- [x] Crear Dockerfile para eliminar-personajes.
- [x] Crear Dockerfile para documentacion-swagger.
- [x] Ajustar application.properties para usar PORT en lugar de SERVER_PORT.
- [x] Corregir URLs en frontend/caballeros/src/services/api.js.
- [x] Descomentar y ajustar dependencias java-dotenv en pom.xml si es necesario (o eliminar uso de Dotenv).
- [x] Verificar que todos los servicios usen la misma versión de Java y Spring Boot.

## Próximos Pasos
- Desplegar cada servicio en Render como servicios web separados.
- Configurar las variables de entorno en Render para cada servicio (MONGO_HOST, MONGO_USER, MONGO_PASS, MONGO_DB).
- Verificar que el frontend se despliegue correctamente y se conecte a los servicios.
- Probar la funcionalidad completa de la aplicación.
