import { useState, useEffect } from 'react';
import useLikeReview from '../../../../review/hooks/useLikeReview';
import useDeleteReview from '../../../../review/hooks/useDeleteReview';
import useCombinedReviews from '../../../../review/hooks/useCombineReviews';

export const useManageReviews = (user, combinedReviews, fetchReviews) => {
    const { handleLike } = useLikeReview();
    const { handleDelete } = useDeleteReview();
    const { updateReview } = useCombinedReviews();
    const [reviewToDelete, setReviewToDelete] = useState(null);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [favoriteReviews, setFavoriteReviews] = useState([]);

    useEffect(() => {
        setFavoriteReviews(
            combinedReviews.filter(
                (review) => review.visitorId !== user._id && review.likes?.includes(user._id)
            )
        );
    }, [combinedReviews, user._id]);

    const confirmDeleteReview = (reviewId) => {
        setReviewToDelete(reviewId);
        setOpenConfirmDialog(true);
    };

    const handleConfirmDeleteReview = async () => {
        try {
            await handleDelete(reviewToDelete);
            if (fetchReviews) {
                fetchReviews(user._id); // Ensure fetchReviews is a function
            }
        } catch (err) {
            console.error("Error deleting review:", err);
        } finally {
            setOpenConfirmDialog(false);
            setReviewToDelete(null);
        }
    };

    const handleCancelDelete = () => {
        setOpenConfirmDialog(false);
        setReviewToDelete(null);
    };

    const handleLikeReview = async (reviewId) => {
        try {
            await handleLike(reviewId);

            const updatedReview = combinedReviews.find((review) => review._id === reviewId);

            if (updatedReview) {
                const isLiked = updatedReview.likes?.includes(user._id);
                const updatedLikes = isLiked
                    ? updatedReview.likes.filter((id) => id !== user._id)
                    : [...updatedReview.likes, user._id];

                updateReview({
                    ...updatedReview,
                    likes: updatedLikes,
                });

                if (isLiked) {
                    setFavoriteReviews((prev) =>
                        prev.filter((review) => review._id !== reviewId)
                    );
                } else {
                    setFavoriteReviews((prev) => [
                        ...prev,
                        { ...updatedReview, type: 'favorite' },
                    ]);
                }
            }
        } catch (err) {
            console.error("Error liking/unliking the review:", err);
        }
    };

    return {
        favoriteReviews,
        confirmDeleteReview,
        handleConfirmDeleteReview,
        handleCancelDelete,
        handleLikeReview,
        openConfirmDialog,
    };
};
