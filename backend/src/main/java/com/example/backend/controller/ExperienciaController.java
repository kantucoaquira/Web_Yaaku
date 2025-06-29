package com.example.backend.controller;

import com.example.backend.model.Experiencia;
import com.example.backend.service.ExperienciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping("/api/experiencias")
public class ExperienciaController {

    @Autowired
    private ExperienciaService experienciaService;

    @GetMapping
    public List<Experiencia> getAllExperiencias() {
        return experienciaService.getAllExperiencias();
    }

    @PostMapping
    public Experiencia createExperiencia(@RequestBody Experiencia experiencia) {
        return experienciaService.saveExperiencia(experiencia);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Experiencia> getExperienciaById(@PathVariable Long id) {
        Experiencia experiencia = experienciaService.getExperienciaById(id);
        return ResponseEntity.ok(experiencia);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Experiencia> updateExperiencia(@PathVariable Long id, @RequestBody Experiencia experiencia) {
        return ResponseEntity.ok(experienciaService.updateExperiencia(id, experiencia));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExperiencia(@PathVariable Long id) {
        experienciaService.deleteExperiencia(id);
        return ResponseEntity.noContent().build();
    }
}
