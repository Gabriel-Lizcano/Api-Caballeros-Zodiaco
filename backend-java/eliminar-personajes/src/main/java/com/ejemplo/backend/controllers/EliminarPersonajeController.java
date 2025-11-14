package com.ejemplo.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ejemplo.backend.repository.PersonajeRepository;


@RestController
@RequestMapping("/eliminar-personajes")
public class EliminarPersonajeController {
    @Autowired
    private PersonajeRepository repo;

    @DeleteMapping("/{id}")
    @SuppressWarnings("null")
    public String eliminarPersonaje(@PathVariable("id") String id) {
        if (!repo.existsById(id)) {
            return "No se encontró el personaje con ID: " + id;
        }
        repo.deleteById(id);
        return "Personaje con ID " + id + " eliminado correctamente.";
    }
}