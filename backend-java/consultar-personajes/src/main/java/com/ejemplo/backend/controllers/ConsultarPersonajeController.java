package com.ejemplo.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ejemplo.backend.models.Personaje;
import com.ejemplo.backend.repository.PersonajeRepository;
import java.util.List;

@RestController
@RequestMapping("/consultar-personajes")
public class ConsultarPersonajeController {

    @Autowired
    private PersonajeRepository repo;

    @GetMapping
    public List<Personaje> consultarPersonajes() {
        return repo.findAll();
    }
}
