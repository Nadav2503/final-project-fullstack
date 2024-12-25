import { useCallback, useState } from 'react';
import { updateExhibit } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';
import normalizeExhibit from '../helpers/normalizeExhibit';

export default function useUpdateExhibit() {
    const [exhibit, setExhibit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleUpdateExhibit = useCallback(async (id, exhibitFromClient) => {
        setIsLoading(true);
        setError(null);
        try {
            const normalizedExhibit = normalizeExhibit(exhibitFromClient);
            const updatedExhibit = await updateExhibit(id, normalizedExhibit);
            setExhibit(updatedExhibit);
            setSnack('success', `Exhibit ${id} updated successfully!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to update exhibit ${id}`);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack, normalizeExhibit]);

    return { exhibit, isLoading, error, handleUpdateExhibit };
}
