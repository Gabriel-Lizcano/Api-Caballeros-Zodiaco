package com.ejemplo.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();

        // PERMITIR TODOS LOS ORÍGENES (incluye Swagger UI)
        config.addAllowedOriginPattern("*");

        // PERMITIR HEADERS
        config.addAllowedHeader("*");

        // PERMITIR MÉTODOS
        config.addAllowedMethod("*");

        // PERMITIR ENVÍO DE COOKIES SI ES NECESARIO
        config.setAllowCredentials(true);

        // APLICAR A TODAS LAS RUTAS
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}
