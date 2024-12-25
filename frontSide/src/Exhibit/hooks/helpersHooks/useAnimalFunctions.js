import useLikeAnimal from "../../../visitor/hooks/useLikeAnimal";
import ROUTES from "../../../routers/routerModel";
import { useNavigate } from "react-router-dom";

const useAnimalFunctions = (exhibitId, fetchAnimalsByExhibit) => {
    const navigate = useNavigate();
    const { handleLikeAnimal } = useLikeAnimal();

    const handleFavoriteToggle = async (animalId, visitor) => {
        try {
            if (!visitor || !visitor._id) {
                throw new Error("Visitor not authenticated.");
            }
            await handleLikeAnimal(animalId);
            fetchAnimalsByExhibit(exhibitId); // Ensure animals and isLiked are updated
        } catch (error) {
            console.error("Error toggling favorite status:", error);
        }
    };

    const handleEditAnimal = (id) => {
        navigate(`${ROUTES.EDIT_ANIMAL}/${id}`);
    };
    return { handleFavoriteToggle, handleEditAnimal };
};

export default useAnimalFunctions;
