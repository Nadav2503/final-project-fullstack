import { useState, useCallback } from 'react';
import { getVisitorById } from '../../services/VisitorServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useGetVisitorById() {
    const [visitor, setVisitor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchVisitorById = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getVisitorById(id); // Call your API service to fetch user data by ID
            setVisitor(data); // Set the fetched user data
            setSnack('success', `Visitor ${id} fetched successfully!`); // Optionally show a success message
        } catch (err) {
            setError(err.message); // Set the error if any occurs
            setSnack('error', `Failed to fetch visitor ${id}`); // Optionally show an error message
        } finally {
            setLoading(false); // Stop loading
        }
    }, [setSnack]);

    return { visitor, loading, error, fetchVisitorById };
}
