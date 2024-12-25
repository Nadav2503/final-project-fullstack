import { useCallback, useState } from "react";
import { deleteAnimal } from "../../services/AnimalServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useDeleteAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleDeleteAnimal = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            await deleteAnimal(id);
            setSnack('success', `Animal ${id} deleted successfully!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to delete animal ${id}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { handleDeleteAnimal, loading, error };
};

export default useDeleteAnimal;
