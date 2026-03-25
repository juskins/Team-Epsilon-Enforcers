package com.wastewatch.citizens;

import com.wastewatch.common.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "citizens")
@Getter @Setter
@NoArgsConstructor
public class CitizenEntity extends BaseEntity {

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, unique = true, length = 255)
    private String email;

    @Column(length = 20)
    private String phone;

    @Column(name = "lga_id")
    private UUID lgaId;

    @Column(name = "total_points", nullable = false)
    private Integer totalPoints = 0;
}