import { useEffect } from "react";
import useExhibitById from "../useExhibitDataById";
import useGetAnimalsByExhibit from "../../../animal/hooks/useGetAnimalsByExhibit";
import useFetchReviewsForExhibit from "../../../review/hooks/useGetReviewsForExhibit";

const useExhibitDetail = (visitor, exhibitId) => {
    const { exhibit, error, isLoading, fetchExhibitById } = useExhibitById();
    const { animals, fetchAnimalsByExhibit } = useGetAnimalsByExhibit();
    const { reviews, averageRating, fetchReviews } = useFetchReviewsForExhibit();

    useEffect(() => {
        if (visitor && visitor._id) {
            fetchExhibitById(exhibitId);
            fetchAnimalsByExhibit(exhibitId);
            fetchReviews(exhibitId);
        }
    }, [visitor, exhibitId, fetchExhibitById, fetchAnimalsByExhibit, fetchReviews]);

    return { exhibit, animals, reviews, averageRating, error, isLoading, fetchAnimalsByExhibit, fetchReviews };
};

export default useExhibitDetail;
