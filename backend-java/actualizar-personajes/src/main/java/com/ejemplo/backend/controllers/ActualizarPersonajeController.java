package com.ejemplo.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ejemplo.backend.models.Personaje;
import com.ejemplo.backend.repository.PersonajeRepository;

import java.util.Objects;

@RestController
@RequestMapping("/actualizar-personajes")
public class ActualizarPersonajeController {

    @Autowired
    private PersonajeRepository repo;

    @PutMapping("/{id}")
    public String actualizarPersonaje(@PathVariable("id") String id, @RequestBody Personaje nuevosDatos) {
        // Verificar que id no sea nulo
        Objects.requireNonNull(id, "El ID no puede ser nulo");

        // Buscar personaje existente
        Personaje personajeExistente = repo.findById(id)
            .orElseThrow(() -> new RuntimeException("No se encontró el personaje con ID: " + id));

        // Actualizar campos solo si tienen valor
        if (nuevosDatos.getNombre() != null && !nuevosDatos.getNombre().isBlank()) {
            personajeExistente.setNombre(nuevosDatos.getNombre());
        }

        if (nuevosDatos.getEdad() > 0) {
            personajeExistente.setEdad(nuevosDatos.getEdad());
        }

        if (nuevosDatos.getAltura() > 0) {
            personajeExistente.setAltura(nuevosDatos.getAltura());
        }

        if (nuevosDatos.getConstelacion() != null && !nuevosDatos.getConstelacion().isBlank()) {
            personajeExistente.setConstelacion(nuevosDatos.getConstelacion());
        }

        if (nuevosDatos.getUrlImagen() != null && !nuevosDatos.getUrlImagen().isBlank()) {
            personajeExistente.setUrlImagen(nuevosDatos.getUrlImagen());
        }

        repo.save(Objects.requireNonNull(personajeExistente));
        

        return "✅ Personaje con ID " + id + " actualizado correctamente.";
    }
}
