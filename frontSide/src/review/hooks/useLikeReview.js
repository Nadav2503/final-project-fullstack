import { useState, useCallback } from "react";
import { likeReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useLikeReview = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleLike = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            await likeReview(id);
            setSnack("success", "Review like/unlike successful!");
        } catch (err) {
            setError(err.message);
            setSnack("error", `Failed to like/unlike review: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { handleLike, loading, error };
};

export default useLikeReview;
