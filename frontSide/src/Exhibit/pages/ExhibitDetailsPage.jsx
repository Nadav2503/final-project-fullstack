import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Divider, Container } from "@mui/material";
import {
    Pets as PetsIcon,
    LocationOn as LocationIcon,
    CheckCircle as StatusIcon,
} from "@mui/icons-material";
import PageHeader from "../../general/PageHeader";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import ROUTES from "../../routers/routerModel";
import AddNewButton from "../../general/AddButton";
import ConfirmDialog from "../../general/ConfirmDialog";
import { useCurrentVisitor } from "../../providers/VisitorProvider";
import useExhibitDetail from "../hooks/helpersHooks/useExhibitDetail";
import useAnimalFunctions from "../hooks/helpersHooks/useAnimalFunctions";
import useReviewFunctions from "../hooks/helpersHooks/useReviewFunctions";
import AnimalFeedback from "../../animal/components/AnimalFeedback";
import ReviewFeedback from "../../review/components/ReviewFeedback";
import useDeleteAnimal from "../../animal/hooks/useDeleteAnimal";
import useUpdateAnimalsInExhibit from "../hooks/useUpdateAnimalsInExhibit";
import useDeleteReview from "../../review/hooks/useDeleteReview";
import useDeleteHandler from "../hooks/helpersHooks/useDeleteHandler";

export default function ExhibitDetailPage() {
    const { exhibitId } = useParams();
    const { visitor } = useCurrentVisitor();
    const navigate = useNavigate();
    const { handleDeleteAnimal } = useDeleteAnimal();
    const { handleUpdateAnimals } = useUpdateAnimalsInExhibit();
    const { handleDelete: handleDeleteReview } = useDeleteReview();
    const {
        exhibit,
        animals,
        reviews,
        averageRating,
        error,
        isLoading,
        fetchAnimalsByExhibit,
        fetchReviews,
    } = useExhibitDetail(visitor, exhibitId);
    const { handleFavoriteToggle, handleEditAnimal } = useAnimalFunctions(exhibitId, fetchAnimalsByExhibit);
    const { handleLike, handleEditReview } = useReviewFunctions(exhibitId, fetchReviews);

    const {
        openConfirmDialog,
        deleteContext,
        confirmDelete,
        handleConfirmDelete,
        handleCancelDelete,
    } = useDeleteHandler({
        fetchAnimalsByExhibit,
        fetchReviews,
        handleDeleteAnimal,
        handleUpdateAnimals,
        handleDeleteReview,
    });

    const handleAddAnimal = () => {
        navigate(ROUTES.ADD_ANIMAL, { state: { exhibitId: exhibitId } });
    };

    const canAddAnimal = visitor?.isAdmin || visitor?.membershipTier === 4;

    if (isLoading) return <Loader />;
    if (error) {
        const errorMessage = typeof error === "string" ? error : error.message || "An unknown error occurred.";
        return <Error errorMessage={errorMessage} />;
    }
    if (!exhibit) return <Error errorMessage="Exhibit not found." />;

    return (
        <Container>
            <PageHeader title={exhibit.name} subtitle={exhibit.description} />

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", mt: 4, mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <PetsIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">Current Animals: {animals?.length || 0}</Typography>
                </Box>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                    Exhibit Capacity: {exhibit.capacity}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <LocationIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">{exhibit.location}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <StatusIcon
                        sx={{ marginRight: 1, color: exhibit.status === "open" ? "green" : exhibit.status === "closed" ? "red" : "#F09319" }}
                    />
                    <Typography
                        variant="h6"
                        color={exhibit.status === "open" ? "green" : exhibit.status === "closed" ? "red" : "#F09319"}
                    >
                        {exhibit.status}
                    </Typography>
                </Box>
                <Divider sx={{ my: 2, width: "100%", maxWidth: "600px" }} />
            </Box>

            <AnimalFeedback
                isLoading={isLoading}
                error={error}
                animals={animals}
                handleDelete={(id) => confirmDelete("animal", id)}
                handleEditAnimal={handleEditAnimal}
                handleFavoriteToggle={(animalId) => handleFavoriteToggle(animalId, visitor)}
                visitor={visitor}
            />

            <Divider sx={{ my: 3 }} />

            <Box sx={{ my: 4, textAlign: "center" }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                    Average Rating
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ py: 2, px: 4, display: "inline-block", border: "1px solid", borderRadius: "8px", borderColor: "text.secondary" }}
                >
                    {averageRating}
                </Typography>
            </Box>

            <ReviewFeedback
                isLoading={isLoading}
                reviews={reviews}
                error={error}
                handleDelete={(id) => confirmDelete("review", id)}
                handleEdit={handleEditReview}
                handleLike={handleLike}
                currentUserId={visitor._id}
            />

            {canAddAnimal && <AddNewButton onAdd={handleAddAnimal} />}

            <ConfirmDialog
                open={openConfirmDialog}
                onClose={handleCancelDelete}
                onConfirm={() => handleConfirmDelete(exhibitId)}
                title={`Confirm ${deleteContext.type === "animal" ? "Animal" : "Review"} Deletion`}
                content={`Are you sure you want to delete this ${deleteContext.type === "animal" ? "animal" : "review"}?`}
            />
        </Container>
    );
}
