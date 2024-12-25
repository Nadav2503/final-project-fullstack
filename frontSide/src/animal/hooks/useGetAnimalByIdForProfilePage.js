import { useState, useCallback } from "react";
import { getAnimalById } from "../../services/AnimalServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useGetAnimalByIdForProfilePage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchAnimalByIdForProfilePage = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getAnimalById(id);
            setSnack('success', `Animal ${id} fetched successfully!`);
            return data;
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to fetch animal ${id}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);


    return { loading, error, fetchAnimalByIdForProfilePage };
};

export default useGetAnimalByIdForProfilePage;
