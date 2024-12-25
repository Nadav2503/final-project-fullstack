import React, { useCallback, useEffect } from "react";
import ReviewForm from "../components/ReviewForm";
import initializeReview from "../helpers/initializeReview";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useForm from "../../form/useForm";
import useUpdateReview from "../hooks/useUpdateReview";
import useFetchSpecificReview from "../hooks/useGetSpecificReview";
import reviewSchema from "../model/reviewSchema";
import { Box, Container } from "@mui/material";
import normalizeReview from "../helpers/normalizeReview";
import { getUser } from "../../services/LocalStorageService";
import ROUTES from "../../routers/routerModel";

export default function EditReviewPage() {
    const { reviewId } = useParams();
    const user = getUser();
    const location = useLocation();
    const { exhibitId } = location.state || {};
    const { animalId } = location.state || {};

    const navigate = useNavigate();
    const { handleUpdate } = useUpdateReview();
    const { fetchReview, review } = useFetchSpecificReview();

    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleUpdate(reviewId, formData);

                if (exhibitId) {
                    navigate(`${ROUTES.EXHIBIT_INFO}/${exhibitId}`);
                } else if (animalId) {
                    navigate(`${ROUTES.ANIMAL_INFO}/${animalId}`);
                } else if (location.state?.fromProfile) {
                    navigate(ROUTES.PROFILE); // Navigate back to the Profile Page
                }
            } catch (error) {
                console.error("EditReviewPage: Failed to update review", error);
            }
        },
        [handleUpdate, reviewId, navigate, exhibitId, animalId, location.state]
    );


    const { data, errors, handleChangeRating, validateForm, onSubmit, setData } = useForm(
        review || initializeReview,
        reviewSchema,
        handleSubmit
    );

    useEffect(() => {
        if (reviewId) {
            fetchReview(reviewId);
        }
    }, [reviewId, fetchReview]);

    useEffect(() => {
        if (review) {
            setData(normalizeReview(review, user._id, true));
        }
    }, [review, user._id, setData]);

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
                    title="Edit Review"
                    submitLabel={"Save Changes"}
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
