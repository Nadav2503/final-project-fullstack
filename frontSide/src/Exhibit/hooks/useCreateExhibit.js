import { useCallback, useState } from 'react';
import { createExhibit } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';
import normalizeExhibit from '../helpers/normalizeExhibit';

export default function useCreateExhibit() {
    const [exhibit, setExhibit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleCreateExhibit = useCallback(async (exhibitFromClient) => {
        setIsLoading(true);
        setError(null);
        try {
            const normalizedExhibit = normalizeExhibit(exhibitFromClient);
            const data = await createExhibit(normalizedExhibit);
            setExhibit(data);
            setSnack('success', 'Exhibit created successfully!');
        } catch (err) {
            setError(err.message);
            setSnack('error', 'Failed to create exhibit');
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { exhibit, isLoading, error, handleCreateExhibit };
}