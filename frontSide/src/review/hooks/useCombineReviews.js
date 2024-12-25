import { useEffect, useState } from "react";
import useExhibitReviews from "./useExhibitsReviews";
import useAnimalsReviews from "./useAnimalsReviews";

export default function useCombinedReviews() {
    const { allReviews: exhibitReviews, isLoading: exhibitLoading, error: exhibitError } = useExhibitReviews();
    const { allReviews: animalReviews, isLoading: animalLoading, error: animalError } = useAnimalsReviews();

    const [combinedReviews, setCombinedReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!exhibitLoading && !animalLoading) {
            const allCombinedReviews = [
                ...exhibitReviews.map((review) => ({ ...review, type: "exhibit" })),
                ...animalReviews.map((review) => ({ ...review, type: "animal" })),
            ];

            // Deduplicate reviews
            const reviewsMap = new Map();
            allCombinedReviews.forEach((review) => {
                reviewsMap.set(review._id, review);
            });

            const finalCombinedReviews = Array.from(reviewsMap.values());
            setCombinedReviews(finalCombinedReviews);
            setLoading(false);
        }
    }, [exhibitReviews, animalReviews, exhibitLoading, animalLoading]);

    useEffect(() => {
        if (exhibitError || animalError) {
            setError("Error fetching reviews.");
            setLoading(false);
        }
    }, [exhibitError, animalError]);

    // Add the updateReview function to update a review
    const updateReview = (updatedReview) => {
        setCombinedReviews((prevReviews) =>
            prevReviews.map((review) =>
                review._id === updatedReview._id ? updatedReview : review
            )
        );
    };

    return { combinedReviews, loading, error, updateReview };
}
