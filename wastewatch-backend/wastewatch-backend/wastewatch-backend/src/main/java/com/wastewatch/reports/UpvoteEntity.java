package com.wastewatch.reports;

import com.wastewatch.common.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "upvotes",
        uniqueConstraints = @UniqueConstraint(
                columnNames = {"citizen_id", "report_id"}
        ))
@Getter @Setter
@NoArgsConstructor
public class UpvoteEntity extends BaseEntity {

    @Column(name = "citizen_id", nullable = false)
    private UUID citizenId;

    @Column(name = "report_id", nullable = false)
    private UUID reportId;
}