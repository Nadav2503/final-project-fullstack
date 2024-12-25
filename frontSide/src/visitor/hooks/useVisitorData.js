import { useCallback, useState } from 'react';
import { useSnack } from '../../providers/SnackbarProvider';
import { getAllVisitors } from '../../services/VisitorServiceApi';

export default function useGetAllVisitors() {
    const [visitors, setVisitors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchVisitors = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await getAllVisitors();  // API call to get all visitors
            setVisitors(data);  // Update state with the fetched visitors
            setSnack('success', 'Visitors loaded successfully!');
        } catch (err) {
            setError(err.message);  // Set error if fetching fails
            setSnack('error', 'Failed to load visitors');
        } finally {
            setIsLoading(false);  // End loading state
        }
    }, [setSnack]);

    return { visitors, isLoading, error, fetchVisitors };
}
