import { useState, useCallback } from "react";
import { getReviewById } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useFetchSpecificReview = () => {
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchReview = useCallback(async (reviewId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getReviewById(reviewId);
            setReview(data); // Set the fetched review if data exists
        } catch (err) {
            setError(err.message);
            setSnack("error", `Failed to fetch review: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { review, fetchReview, loading, error };
};

export default useFetchSpecificReview;
