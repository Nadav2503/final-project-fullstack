import { useCallback, useState } from "react";
import { createAnimal } from "../../services/AnimalServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizeAnimal from "../helpers/normalizeAnimal";

const useCreateAnimal = () => {
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleCreateAnimal = useCallback(async (animalFromClient) => {
        setLoading(true);
        setError(null);
        try {
            const normalizedAnimal = normalizeAnimal(animalFromClient)
            const data = await createAnimal(normalizedAnimal);
            setAnimal(data);
            setSnack('success', 'Animal created successfully!');
        } catch (err) {
            setError(err.message);
            setSnack('error', 'Failed to create animal');
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { animal, loading, error, handleCreateAnimal };
};

export default useCreateAnimal;

