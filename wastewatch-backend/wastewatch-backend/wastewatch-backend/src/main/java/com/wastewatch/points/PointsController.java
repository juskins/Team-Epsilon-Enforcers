package com.wastewatch.points;

import com.wastewatch.auth.CurrentUser;
import com.wastewatch.common.ApiResponse;
import com.wastewatch.common.exceptions.ForbiddenException;
import com.wastewatch.points.dto.LeaderboardEntryResponse;
import com.wastewatch.points.dto.PointsBalanceResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class PointsController {

    private final PointsService pointsService;
    private final CurrentUser currentUser;

    // GET /citizens/:id/points — balance + full transaction history
    // Citizens can only view their own points
    @GetMapping("/citizens/{citizenId}/points")
    public ResponseEntity<ApiResponse<PointsBalanceResponse>> getPoints(
            @PathVariable UUID citizenId) {

        if (!currentUser.getId().equals(citizenId)) {
            throw new ForbiddenException(
                    "You can only view your own points.");
        }

        return ResponseEntity.ok(
                ApiResponse.ok(
                        pointsService.getBalanceAndHistory(citizenId)));
    }

    // GET /leaderboard/:lgaId — top 10 citizens in an LGA
    // Public endpoint — no JWT needed
    @GetMapping("/leaderboard/{lgaId}")
    public ResponseEntity<ApiResponse<List<LeaderboardEntryResponse>>> getLeaderboard(
            @PathVariable UUID lgaId) {

        return ResponseEntity.ok(
                ApiResponse.ok(
                        pointsService.getLeaderboard(lgaId)));
    }
}