import { useEffect, useState, useCallback } from "react";
import useExhibitData from "../../Exhibit/hooks/useExhibitData";
import useGetAnimalsByExhibit from "../../animal/hooks/useGetAnimalsByExhibit";
import useFetchReviewsForAnimal from "./useGetReviewsForAnimal";

export default function useAnimalsReviews() {
    const { exhibits, fetchExhibits } = useExhibitData();
    const { fetchAnimalsByExhibit, animals } = useGetAnimalsByExhibit();
    const { fetchReviews, reviews } = useFetchReviewsForAnimal();

    const [animalsById, setAnimalsById] = useState([]);
    const [allReviews, setAllReviews] = useState([]);
    const [allAnimalsFetched, setAllAnimalsFetched] = useState(false);

    // Handle unique reviews for each animal
    const handleFetchedAnimalWithReviews = useCallback((animal, reviews) => {
        setAnimalsById((prevAnimals) => {
            const existingAnimalIndex = prevAnimals.findIndex((a) => a._id === animal._id);
            if (existingAnimalIndex > -1) {
                const updatedAnimals = [...prevAnimals];
                updatedAnimals[existingAnimalIndex] = {
                    ...updatedAnimals[existingAnimalIndex],
                    reviews: [
                        ...updatedAnimals[existingAnimalIndex].reviews,
                        ...reviews.filter(
                            (newReview) =>
                                !updatedAnimals[existingAnimalIndex].reviews.some(
                                    (existingReview) => existingReview._id === newReview._id
                                )
                        )
                    ]
                };
                return updatedAnimals;
            } else {
                return [...prevAnimals, { ...animal, reviews }];
            }
        });

        setAllReviews((prevReviews) => {
            const updatedReviews = [
                ...prevReviews,
                ...reviews.filter((newReview) => !prevReviews.some((existingReview) => existingReview._id === newReview._id))
            ];
            return updatedReviews;
        });
    }, []);

    useEffect(() => {
        if (exhibits.length === 0) {
            fetchExhibits();
        }
    }, [exhibits.length, fetchExhibits]);

    useEffect(() => {
        if (exhibits.length > 0 && animals.length === 0 && !allAnimalsFetched) {
            exhibits.forEach((exhibit) => {
                if (exhibit._id) {
                    fetchAnimalsByExhibit(exhibit._id);
                }
            });
            setAllAnimalsFetched(true);
        }
    }, [exhibits, animals.length, fetchAnimalsByExhibit, allAnimalsFetched]);

    useEffect(() => {
        const fetchAllReviews = async () => {
            if (animals.length > 0) {
                for (const animal of animals) {
                    if (!animal.reviews) {
                        await fetchReviews(animal._id);  // Wait for reviews to be fetched
                    }
                }
            }
        };

        fetchAllReviews();
    }, [animals, fetchReviews]);

    useEffect(() => {
        if (reviews.length > 0) {
            reviews.forEach((review) => {
                const animal = animals.find((a) => a._id === review.animalId);
                if (animal) {
                    handleFetchedAnimalWithReviews(animal, [review]);
                }
            });
        }
    }, [reviews, animals, handleFetchedAnimalWithReviews]);

    return {
        animalsById,
        allReviews,
    };
}
