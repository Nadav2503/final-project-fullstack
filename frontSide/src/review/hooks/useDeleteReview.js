import { useState, useCallback } from "react";
import { deleteReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useDeleteReview = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleDelete = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            await deleteReview(id); // API call
            setSnack("success", "Review deleted successfully!");
        } catch (err) {
            setError(err.message);
            setSnack("error", `Failed to delete review`);

        } finally {
            setLoading(false);
        }
    }, [setSnack]);


    return { handleDelete, loading, error };
};

export default useDeleteReview;
