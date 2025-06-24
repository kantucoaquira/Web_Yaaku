package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="clients")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Client {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
}
