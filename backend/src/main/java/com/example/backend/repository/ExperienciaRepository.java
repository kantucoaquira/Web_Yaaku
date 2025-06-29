package com.example.backend.repository;

import com.example.backend.model.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienciaRepository extends JpaRepository<Experiencia, Long> {
    // Métodos personalizados si los necesitas en el futuro
}