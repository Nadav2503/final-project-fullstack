import { useState, useCallback } from "react";
import { likeAnimal } from "../../services/VisitorServiceApi"; // This should call toggleLikeAnimal on the backend
import { useSnack } from "../../providers/SnackbarProvider";
import { useCurrentVisitor } from "../../providers/VisitorProvider";

const useLikeAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { visitor } = useCurrentVisitor(); // Minimal data
    const setSnack = useSnack();

    const handleLikeAnimal = useCallback(
        async (animalId) => {
            if (!visitor || !visitor._id) {
                console.error("Visitor not authenticated.");
                return;
            }

            setLoading(true);
            setError(null);

            try {
                // Directly call the API to toggle the "like" status
                await likeAnimal(visitor._id, animalId);

                setSnack('success', `Animal ${animalId} favorite status toggled!`);
            } catch (err) {
                setError(err.message);
                setSnack('error', `Failed to toggle favorite status for animal ${animalId}`);
            } finally {
                setLoading(false);
            }
        },
        [visitor, setSnack]
    );

    return { handleLikeAnimal, loading, error };
};

export default useLikeAnimal;
