import { useCallback, useState } from "react";
import { updateAnimal } from "../../services/AnimalServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizeAnimal from "../helpers/normalizeAnimal";

const useUpdateAnimal = () => {
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleUpdateAnimal = useCallback(async (id, animalFromClient) => {
        setLoading(true);
        setError(null);
        try {
            const normalizedAnimal = normalizeAnimal(animalFromClient);
            const updatedAnimal = await updateAnimal(id, normalizedAnimal);
            setAnimal(updatedAnimal);
            setSnack('success', `Animal ${id} updated successfully!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to update animal ${id}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { animal, loading, error, handleUpdateAnimal };
};

export default useUpdateAnimal;