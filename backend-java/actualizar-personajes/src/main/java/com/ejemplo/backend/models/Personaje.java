package com.ejemplo.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "personajes")
public class Personaje {
    @Id
    private String id;
    private String nombre;
    private int edad;
    private double altura;
    private String constelacion;
    private String urlImagen;

    // Getters y setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public int getEdad() { return edad; }
    public void setEdad(int edad) { this.edad = edad; }

    public double getAltura() { return altura; }
    public void setAltura(double altura) { this.altura = altura; }

    public String getConstelacion() { return constelacion; }
    public void setConstelacion(String constelacion) { this.constelacion = constelacion; }

    public String getUrlImagen() { return urlImagen; }
    public void setUrlImagen(String urlImagen) { this.urlImagen = urlImagen; }
}
