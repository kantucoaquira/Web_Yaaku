package com.example.backend.service;

import com.example.backend.model.Experiencia;
import com.example.backend.repository.ExperienciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExperienciaService {

    @Autowired
    private ExperienciaRepository experienciaRepository;

    public List<Experiencia> getAllExperiencias() {
        return experienciaRepository.findAll();
    }

    public Experiencia saveExperiencia(Experiencia experiencia) {
        return experienciaRepository.save(experiencia);
    }

    public Experiencia updateExperiencia(Long id, Experiencia experienciaDetails) {
        Experiencia experiencia = experienciaRepository.findById(id).get();
        experiencia.setNombre(experienciaDetails.getNombre());
        experiencia.setDescripcion(experienciaDetails.getDescripcion());
        experiencia.setDireccion(experienciaDetails.getDireccion());
        experiencia.setDuracion(experienciaDetails.getDuracion());
        experiencia.setTelefono(experienciaDetails.getTelefono());
        experiencia.setImageUrl(experienciaDetails.getImageUrl());
        experiencia.setCategoria(experienciaDetails.getCategoria());
        experiencia.setPrecio(experienciaDetails.getPrecio());
        return experienciaRepository.save(experiencia);
    }

    public void deleteExperiencia(Long id) {
        experienciaRepository.deleteById(id);
    }

    // 👇 Método corregido aquí:
    public Experiencia getExperienciaById(Long id) {
        return experienciaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Experiencia no encontrada"));
    }
}