import React, { useCallback } from "react";
import ReviewForm from "../components/ReviewForm";
import initializeReview from "../helpers/initializeReview";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../form/useForm";
import useCreateReview from "../hooks/useCreateReview";
import reviewSchema from "../model/reviewSchema";
import { Box, Container } from "@mui/material";
import { getUser } from "../../services/LocalStorageService";
import ROUTES from "../../routers/routerModel";

export default function AddReviewPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const animalId = searchParams.get('animalId');
    const exhibitId = searchParams.get('exhibitId');
    const { handleCreate } = useCreateReview();

    const handleSubmit = useCallback(async (formData) => {
        try {
            const user = getUser(); // Get the logged-in user's data
            if (!user || !user._id) {
                throw new Error("User is not logged in or visitorId is missing");
            }

            const reviewData = {
                ...formData,
                visitorId: user._id, // Add the visitorId to the review data
                animalId: animalId || null,
                exhibitId: exhibitId || null,
            };

            await handleCreate(reviewData); // Submit the review
            if (animalId) {
                navigate(`${ROUTES.ANIMAL_INFO}/${animalId}`);
            } else {
                navigate(`${ROUTES.EXHIBIT_INFO}/${exhibitId}`);
            }
        } catch (error) {
            console.error("Failed to create review:", error);
        }
    }, [handleCreate, navigate, animalId, exhibitId]);

    const { data, errors, handleChangeRating, validateForm, onSubmit } = useForm(
        initializeReview,
        reviewSchema,
        handleSubmit
    );

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ReviewForm
                    title="Add New Review"
                    submitLabel={"Create Review"}
                    onSubmit={onSubmit}
                    validateForm={validateForm}
                    errors={errors}
                    data={data}
                    onInputChange={handleChangeRating}
                />
            </Box>
        </Container>
    );
}