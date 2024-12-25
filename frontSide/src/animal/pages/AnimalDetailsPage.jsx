import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography, Box, Divider, Switch, FormControlLabel } from "@mui/material";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import useGetAnimalById from "../hooks/useGetAnimalById";
import PageHeader from "../../general/PageHeader";
import useUpdateEndangeredStatus from "../hooks/useUpdateEndangeredStatus";
import useFetchReviewsForAnimal from "../../review/hooks/useGetReviewsForAnimal";
import ReviewFeedback from "../../review/components/ReviewFeedback";
import ConfirmDialog from "../../general/ConfirmDialog";
import useLikeReview from "../../review/hooks/useLikeReview";
import { getUser } from "../../services/LocalStorageService";
import { confirmDeleteReview, handleCancelDelete, handleConfirmDeleteReview, handleEditReview, handleEndangeredToggle } from "../hooks/helpersHooks/useDetailsAnimal";
import useDeleteReview from "../../review/hooks/useDeleteReview";

export default function AnimalDetailPage() {
    const { animalId } = useParams();
    const user = getUser();
    const navigate = useNavigate();

    // Hooks for animal data and endangered status
    const { animal, isLoading, error, fetchAnimalById } = useGetAnimalById();
    const { updateStatus } = useUpdateEndangeredStatus();

    const { handleDelete } = useDeleteReview();
    // Hooks for fetching and managing reviews
    const { reviews, averageRating, fetchReviews } = useFetchReviewsForAnimal();
    const { handleLike } = useLikeReview();
    const [endangeredStatus, setEndangeredStatus] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [reviewToDelete, setReviewToDelete] = useState(null); // Add this line

    // Fetch data on mount
    useEffect(() => {
        fetchAnimalById(animalId);
        fetchReviews(animalId);
    }, [animalId, fetchAnimalById, fetchReviews]);

    useEffect(() => {
        setEndangeredStatus(animal?.isEndangered || false);
    }, [animal]);

    if (isLoading) return <Loader />;
    if (error) return <Error errorMessage={error.message || "An unknown error occurred."} />;
    if (!animal) return <Error errorMessage="Animal not found." />;

    return (
        <Container>
            {/* Page Header */}
            <PageHeader sx={{ textAlign: "center", mb: 4 }} title={animal.name} subtitle={animal.description} />
            {/* Animal Image */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <img
                    src={animal.image.url}
                    alt={`${animal.name}`}
                    style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
                />
            </Box>
            <Divider sx={{ mt: 2, mb: 4 }} />
            {/* Animal Details */}
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 4 }}>
                {/* First Column */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box>
                        <Typography variant="body1" color="text.secondary">Type:</Typography>
                        <Typography variant="h6">{animal.type}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" color="text.secondary">Age:</Typography>
                        <Typography variant="h6">{animal.age} years</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" color="text.secondary">Gender:</Typography>
                        <Typography variant="h6">{animal.gender}</Typography>
                    </Box>
                </Box>
                {/* Vertical Divider */}
                <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2, height: "auto" }} />
                {/* Second Column */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box>
                        <Typography variant="body1" color="text.secondary">Diet:</Typography>
                        <Typography variant="h6">{animal.diet}</Typography>
                    </Box>
                    {/* Endangered Status with Toggle */}
                    <Box>
                        <Typography variant="body1" color="text.secondary">Endangered Status:</Typography>
                        {user?.isAdmin && (
                            <FormControlLabel
                                control={<Switch checked={endangeredStatus} onChange={(event) => handleEndangeredToggle(event, animalId, setEndangeredStatus, updateStatus)} disabled={isLoading} />}
                                label={endangeredStatus ? "Yes" : "No"}
                            />
                        )}
                    </Box>
                    <Box>
                        <Typography variant="body1" color="text.secondary">Health Status:</Typography>
                        <Typography variant="h6">{animal.healthStatus}</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{ my: 3 }} />
            {/* Average Rating Section */}

            <Box sx={{ my: 4, textAlign: "center" }}>
                <Typography variant="h5" sx={{ mb: 1 }}>Average Rating</Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        py: 2,
                        px: 4,
                        display: "inline-block",
                        border: "1px solid",
                        borderRadius: "8px",
                        borderColor: "text.secondary",
                    }}
                >
                    {averageRating}
                </Typography>
            </Box>

            <ReviewFeedback
                isLoading={isLoading}
                reviews={reviews}
                error={error}
                handleDelete={(reviewId) => confirmDeleteReview(reviewId, setReviewToDelete, setOpenConfirmDialog)}
                handleEdit={(reviewId) => handleEditReview(reviewId, navigate, animalId)}
                handleLike={handleLike}
                currentUserId={user._id}
            />
            <ConfirmDialog
                open={openConfirmDialog}
                onClose={() => handleCancelDelete(setOpenConfirmDialog, setReviewToDelete)}
                onConfirm={() => handleConfirmDeleteReview(reviewToDelete, handleDelete, fetchReviews, animalId, setOpenConfirmDialog, setReviewToDelete)}
                title="Confirm Review Deletion"
                content="Are you sure you want to delete this review?"
            />
        </Container>
    );
}
