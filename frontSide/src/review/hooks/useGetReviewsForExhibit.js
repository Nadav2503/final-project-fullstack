import { useState, useCallback } from "react";
import { getReviewsForExhibit } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useFetchReviewsForExhibit = () => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchReviews = useCallback(async (exhibitId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getReviewsForExhibit(exhibitId);
            setReviews(data.reviews);
            setAverageRating(data.averageRating);
        } catch (err) {
            setError(err.message);
            setSnack("error", `Failed to fetch reviews for exhibit ${exhibitId}: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { reviews, averageRating, fetchReviews, loading, error };
};

export default useFetchReviewsForExhibit;
