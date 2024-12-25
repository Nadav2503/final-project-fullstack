import { useState, useCallback } from "react";
import { getReviewsForAnimal } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useFetchReviewsForAnimal = () => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchReviews = useCallback(async (animalId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getReviewsForAnimal(animalId);
            setReviews(data.reviews);
            setAverageRating(data.averageRating);
        } catch (err) {
            setError(err.message);
            setSnack("error", `Failed to fetch reviews for animal ${animalId}: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { reviews, averageRating, fetchReviews, loading, error };
};

export default useFetchReviewsForAnimal;
