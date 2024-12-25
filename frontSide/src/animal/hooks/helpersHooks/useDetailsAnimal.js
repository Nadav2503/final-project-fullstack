import ROUTES from "../../../routers/routerModel";

export const handleEndangeredToggle = async (event, animalId, setEndangeredStatus, updateStatus) => {
    const newStatus = event.target.checked;
    setEndangeredStatus(newStatus);
    try {
        await updateStatus(animalId, newStatus);
    } catch (err) {
        setEndangeredStatus(!newStatus); // Revert if update fails
    }
};

export const handleEditReview = (reviewId, navigate, animalId) => {
    navigate(`${ROUTES.EDIT_REVIEW}/${reviewId}`, { state: { animalId } });
};

export const confirmDeleteReview = (reviewId, setReviewToDelete, setOpenConfirmDialog) => {
    setReviewToDelete(reviewId);
    setOpenConfirmDialog(true);
};

export const handleConfirmDeleteReview = async (reviewToDelete, handleDelete, fetchReviews, animalId, setOpenConfirmDialog, setReviewToDelete) => {
    try {
        await handleDelete(reviewToDelete);
        fetchReviews(animalId);
    } catch (err) {
        console.error("Error deleting review:", err);
    } finally {
        setOpenConfirmDialog(false);
        setReviewToDelete(null);
    }
};

export const handleCancelDelete = (setOpenConfirmDialog, setReviewToDelete) => {
    setOpenConfirmDialog(false);
    setReviewToDelete(null);
};
