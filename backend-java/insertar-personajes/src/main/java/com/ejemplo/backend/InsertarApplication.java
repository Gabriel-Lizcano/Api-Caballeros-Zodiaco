package com.ejemplo.backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InsertarApplication {
    public static void main(String[] args) {
        // Carga las variables del archivo .env
        Dotenv dotenv = Dotenv.load();

        String mongoHost = dotenv.get("MONGO_HOST");
        String mongoUser = dotenv.get("MONGO_USER");
        String mongoPassword = dotenv.get("MONGO_PASS");
        String mongoDB = dotenv.get("MONGO_DB");

        if (mongoHost == null || mongoUser == null || mongoPassword == null || mongoDB == null) {
            throw new RuntimeException(".env variables are missing!");
        }

        // Las ponemos como propiedades del sistema para que Spring Boot las lea
        System.setProperty("MONGO_HOST", mongoHost);
        System.setProperty("MONGO_USER", mongoUser);
        System.setProperty("MONGO_PASS", mongoPassword);
        System.setProperty("MONGO_DB", mongoDB);

        SpringApplication.run(InsertarApplication.class, args);
    }
}
