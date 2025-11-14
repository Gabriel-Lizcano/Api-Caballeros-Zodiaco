package com.ejemplo.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.ejemplo.backend.models.Personaje;

public interface PersonajeRepository extends MongoRepository<Personaje, String> {}
