import { useState, useCallback } from "react";
import { updateReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizeReview from "../helpers/normalizeReview";
import { getUser } from "../../services/LocalStorageService";

const useUpdateReview = () => {
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();
    const user = getUser();

    const handleUpdate = useCallback(async (id, updatedData) => {
        setLoading(true);
        setError(null);
        try {
            const normalizedReview = normalizeReview(updatedData, user._id, true); // Pass true for editing
            const updatedReview = await updateReview(id, normalizedReview); // API call

            // Return the updated review with necessary properties
            setReview({
                ...updatedReview,
                exhibitId: updatedReview.exhibitId || updatedData.exhibitId,
                animalId: updatedReview.animalId || updatedData.animalId,
                likes: updatedReview.likes || updatedData.likes,
            });

            setSnack("success", "Review updated successfully!");
        } catch (err) {
            setError(err.message);
            setSnack("error", `Failed to update review: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack, user]);

    return { handleUpdate, loading, review, error };
};

export default useUpdateReview;
