package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration globalConfig = new CorsConfiguration();
        globalConfig.setAllowedOriginPatterns(List.of("http://localhost:*")); // para Angular
        globalConfig.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        globalConfig.setAllowedHeaders(List.of("*"));
        globalConfig.setAllowCredentials(true);

        // Configuración específica para experiencias
        CorsConfiguration experienciasConfig = new CorsConfiguration();
        experienciasConfig.setAllowedOrigins(List.of("http://localhost:4200"));
        experienciasConfig.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        experienciasConfig.setAllowedHeaders(List.of("*"));
        experienciasConfig.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // mantiene la configuración global para todo
        source.registerCorsConfiguration("/**", globalConfig);
        // anula solo para experiencias
        source.registerCorsConfiguration("/api/experiencias/**", experienciasConfig);

        return new CorsFilter(source);
    }
}
