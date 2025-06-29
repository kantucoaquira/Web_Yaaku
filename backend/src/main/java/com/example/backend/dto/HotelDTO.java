package com.example.backend.dto;

import com.example.backend.model.Hotel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data // Genera getters, setters, toString, equals, hashCode
@NoArgsConstructor
@AllArgsConstructor
public class HotelDTO {
    private Long id;
    private String name;
    private String address;
    private String phone;        // 👈 Nuevo campo
    private String description;
    private String imageUrl; // Descomenta si lo usas
    private BigDecimal price; // Precio por noche
    private String category;

    // Constructor desde Hotel
    public HotelDTO(Hotel hotel) {
        this.id = hotel.getId();
        this.name = hotel.getName();
        this.address = hotel.getAddress();
        this.phone = hotel.getPhone();           // 👈 Mapeado
        this.description = hotel.getDescription();
        this.imageUrl = hotel.getImageUrl();
        this.price = hotel.getPrice();
        this.category = hotel.getCategory();
    }
}