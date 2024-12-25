import React from "react";
import ReviewCard from "./card/ReviewCard";
import { Container } from "@mui/material";

export default function Reviews({ reviews, handleDelete, handleEdit, handleLike, currentUserId }) {
    return (
        <Container
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
                alignItems: "stretch",
            }}
        >
            {reviews.map((review) => (
                <ReviewCard
                    review={review}
                    key={review._id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleLike={handleLike}
                    currentUserId={currentUserId}
                />
            ))}
        </Container>
    );
}
