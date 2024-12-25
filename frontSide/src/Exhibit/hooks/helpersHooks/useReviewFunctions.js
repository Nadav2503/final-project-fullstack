import { useNavigate } from "react-router-dom";
import useLikeReview from "../../../review/hooks/useLikeReview";
import ROUTES from "../../../routers/routerModel";

const useReviewFunctions = (exhibitId) => {
    const navigate = useNavigate();
    const { handleLike } = useLikeReview();

    const handleEditReview = (id) => {
        navigate(`${ROUTES.EDIT_REVIEW}/${id}`, {
            state: { exhibitId: exhibitId },
        });
    };
    return { handleLike, handleEditReview };
};

export default useReviewFunctions;
