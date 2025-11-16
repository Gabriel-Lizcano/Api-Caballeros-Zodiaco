package com.ejemplo.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InsertarApplication {
    public static void main(String[] args) {

        // Leer desde variables de entorno (Render)
        String mongoHost = System.getenv("MONGO_HOST");
        String mongoUser = System.getenv("MONGO_USER");
        String mongoPassword = System.getenv("MONGO_PASS");
        String mongoDB = System.getenv("MONGO_DB");

        // Validación
        if (mongoHost == null || mongoUser == null || mongoPassword == null || mongoDB == null) {
            throw new RuntimeException("Environment variables are missing! Check Render dashboard.");
        }

        System.setProperty("MONGO_HOST", mongoHost);
        System.setProperty("MONGO_USER", mongoUser);
        System.setProperty("MONGO_PASS", mongoPassword);
        System.setProperty("MONGO_DB", mongoDB);

        SpringApplication.run(InsertarApplication.class, args);
    }
}
