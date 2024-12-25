import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ReviewFeedback from "../../../review/components/ReviewFeedback";

export default function UserReviewsSection({ reviews, handleEditReview, confirmDeleteReview, handleLikeReview, currentUserId }) {
    return (
        <Box>
            <Typography variant="h5" align="center" mb={2}>
                Your Reviews
            </Typography>
            <ReviewFeedback
                reviews={reviews}
                handleEdit={handleEditReview}
                handleDelete={confirmDeleteReview}
                handleLike={handleLikeReview}
                currentUserId={currentUserId}
            />
            <Divider sx={{ my: 3 }} />
        </Box>
    );
}
