import { useCallback, useState } from 'react';
import { deleteExhibit } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useDeleteExhibit() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleDeleteExhibit = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            await deleteExhibit(id);
            setSnack('success', `Exhibit ${id} deleted successfully!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to delete exhibit ${id}`);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { isLoading, error, handleDeleteExhibit };
}
