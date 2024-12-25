import { useState, useCallback } from "react";
import { updateEndangeredStatus } from "../../services/AnimalServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useUpdateEndangeredStatus = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const updateStatus = useCallback(async (id, status) => {
        setLoading(true);
        setError(null);

        try {
            const data = await updateEndangeredStatus(id, status);
            setSnack('success', `Endangered status of animal ${id} updated successfully!`);
            return data;
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to update endangered status for animal ${id}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { updateStatus, loading, error };
};

export default useUpdateEndangeredStatus;
