# Etapa de construcción
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copiar pom.xml y descargar dependencias
COPY pom.xml .
RUN mvn -q -e -DskipTests dependency:go-offline

# Copiar código fuente
COPY src ./src

# Construir el proyecto sin tests
RUN mvn clean package -DskipTests

# Etapa de ejecución
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copiar el JAR construido desde la etapa build
COPY --from=build /app/target/*.jar app.jar

# Configurar puerto dinámico para Render
ENV PORT 8081
EXPOSE $PORT

# Comando para ejecutar la aplicación
ENTRYPOINT ["java","-jar","app.jar"]
