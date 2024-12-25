import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";
import ConfirmDialog from "../../general/ConfirmDialog";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import ProfileInfoCard from "../helpers/profile/ProfileInfoCard";
import PreferredAnimalsSection from "../helpers/profile/PreferredAnimalsSection";
import UserReviewsSection from "../helpers/profile/UserReviewsSection";
import FavoriteReviewsSection from "../helpers/profile/FavoriteReviewsSection";
import ROUTES from "../../routers/routerModel";
import { getUser } from "../../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import { useFetchVisitorData } from "../helpers/profile/hooks/useFetchVisitorData";
import { useFetchAnimalData } from "../helpers/profile/hooks/useFetchAnimalData";
import { useManageReviews } from "../helpers/profile/hooks/useManageReviews";

import useGetAnimalByIdForProfilePage from "../../animal/hooks/useGetAnimalByIdForProfilePage";
import useCombinedReviews from "../../review/hooks/useCombineReviews";

export default function ProfilePage() {
    const user = getUser();
    const navigate = useNavigate();
    const { fetchAnimalByIdForProfilePage } = useGetAnimalByIdForProfilePage();
    const { combinedReviews } = useCombinedReviews();
    const { visitor, loading, error, reviews, fetchReviews } = useFetchVisitorData();
    const { animalsDetails, handleFavoriteToggle } = useFetchAnimalData(visitor, fetchAnimalByIdForProfilePage);
    const {
        favoriteReviews,
        confirmDeleteReview,
        handleConfirmDeleteReview,
        handleCancelDelete,
        handleLikeReview,
        openConfirmDialog,
    } = useManageReviews(user, combinedReviews, fetchReviews);


    const handleEditProfile = () => {
        navigate(`${ROUTES.EDIT_PROFILE}/${user._id}`);
    };

    const handleEditReview = (reviewId) => {
        navigate(`${ROUTES.EDIT_REVIEW}/${reviewId}`, { state: { fromProfile: true } });
    };

    if (loading) return <Loader />;
    if (error) return <Error errorMessage={error.message || "An error occurred"} />;
    if (!visitor) return <Error errorMessage="Visitor not found" />;

    return (
        <Container>
            <PageHeader
                title={`Welcome to Your Profile, ${visitor.name.first}!`}
                subtitle="View and update your personal details"
            />
            <ProfileInfoCard
                visitor={visitor}
                handleEditProfile={handleEditProfile}
            />
            <PreferredAnimalsSection animalsDetails={animalsDetails} handleFavoriteToggle={handleFavoriteToggle} />
            <UserReviewsSection
                reviews={reviews.filter((review) => review.visitorId === user._id)}
                handleEditReview={handleEditReview}
                confirmDeleteReview={confirmDeleteReview}
                handleLikeReview={handleLikeReview}
                currentUserId={user._id}
            />
            <FavoriteReviewsSection
                reviews={favoriteReviews}
                handleLikeReview={handleLikeReview}
                currentUserId={user._id}
            />
            <ConfirmDialog
                open={openConfirmDialog}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDeleteReview}
                title="Confirm Review Deletion"
                content="Are you sure you want to delete this review?"
            />
        </Container>
    );
}
