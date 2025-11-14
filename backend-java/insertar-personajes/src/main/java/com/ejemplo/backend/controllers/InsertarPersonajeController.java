package com.ejemplo.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ejemplo.backend.models.Personaje;
import com.ejemplo.backend.repository.PersonajeRepository;

@RestController
@RequestMapping("/insertar-personajes")
public class InsertarPersonajeController {

  @Autowired
  private PersonajeRepository repo;

  @PostMapping
  public Personaje insertarPersonaje(@RequestBody Personaje p) {
    if (p == null) {
      throw new IllegalArgumentException("El personaje no puede ser nulo");
    }
    return repo.save(p);
  }
}
