import { useEffect, useState } from "react";
import useExhibitData from "../../Exhibit/hooks/useExhibitData";
import useFetchReviewsForExhibit from "./useGetReviewsForExhibit";

export default function useExhibitReviews() {
    const { exhibits, fetchExhibits } = useExhibitData();
    const { fetchReviews, reviews } = useFetchReviewsForExhibit();

    const [exhibitsById, setExhibitsById] = useState([]);
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        if (exhibits.length > 0) {
            exhibits.forEach((exhibit) => exhibit._id && fetchReviews(exhibit._id));
        } else {
            fetchExhibits();
        }
    }, [exhibits, fetchExhibits, fetchReviews]);

    useEffect(() => {
        if (reviews.length > 0) {
            // Update reviews and remove duplicates
            setAllReviews((prevReviews) => {
                const updatedReviews = [...prevReviews, ...reviews];
                const uniqueReviews = updatedReviews.filter(
                    (value, index, self) => index === self.findIndex((t) => t._id === value._id)
                );
                return uniqueReviews;
            });

            // Associate reviews with the corresponding exhibit
            setExhibitsById((prevExhibits) => {
                const updatedExhibits = prevExhibits.map((existingExhibit) =>
                    existingExhibit._id === reviews[0]?.exhibitId
                        ? { ...existingExhibit, reviews }
                        : existingExhibit
                );
                const exhibit = exhibits.find((e) => e._id === reviews[0]?.exhibitId);
                if (exhibit && !updatedExhibits.find((e) => e._id === exhibit._id)) {
                    updatedExhibits.push({ ...exhibit, reviews });
                }
                return updatedExhibits;
            });
        }
    }, [reviews, exhibits]);

    return { exhibitsById, allReviews };
}
