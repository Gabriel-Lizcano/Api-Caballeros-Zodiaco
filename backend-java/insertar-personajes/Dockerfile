# Etapa 1: Construcción
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copiar archivos del proyecto (desde la misma carpeta del Dockerfile)
COPY pom.xml .
COPY backend-java/insertar-personajes/src ./src

RUN mvn -q -DskipTests clean package

# Etapa 2: Ejecución
FROM eclipse-temurin:17-jdk
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

# Render asigna el puerto
ENV PORT=8080

ENTRYPOINT ["java", "-jar", "app.jar"]
