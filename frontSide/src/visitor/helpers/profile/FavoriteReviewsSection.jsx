import React from "react";
import { Box, Typography } from "@mui/material";
import ReviewFeedback from "../../../review/components/ReviewFeedback";

export default function FavoriteReviewsSection({ reviews, handleLikeReview, currentUserId }) {
    return (
        <Box>
            <Typography variant="h5" align="center" mb={2}>
                Favorite Reviews
            </Typography>
            <ReviewFeedback
                reviews={reviews}
                handleEdit={null}
                handleDelete={null}
                handleLike={handleLikeReview}
                currentUserId={currentUserId}
            />
        </Box>
    );
}
