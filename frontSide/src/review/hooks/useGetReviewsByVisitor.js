import { useState, useCallback } from "react";
import { getReviewsByVisitor } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useFetchReviewsByVisitor = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchReviews = useCallback(async (visitorId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getReviewsByVisitor(visitorId);
            setReviews(data);
        } catch (err) {
            setError(err.message);
            setSnack("error", `Failed to fetch reviews for visitor ${visitorId}: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { reviews, fetchReviews, loading, error };
};

export default useFetchReviewsByVisitor;
