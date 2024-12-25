import { useCallback, useState } from 'react';
import { getExhibits } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useExhibitData() {
    const [exhibits, setExhibits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchExhibits = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await getExhibits();  // API call to get exhibits

            setExhibits(data);  // Update state directly without checking length

            setSnack('success', 'Exhibits loaded successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);


    return { exhibits, error, isLoading, fetchExhibits };
}
