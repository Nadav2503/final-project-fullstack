import { useState, useCallback } from 'react';
import { loginVisitor } from '../../services/VisitorServiceApi';
import { getUser, setTokenInLocalStorage } from '../../services/LocalStorageService';
import { useSnack } from '../../providers/SnackbarProvider';
import { useCurrentVisitor } from '../../providers/VisitorProvider';

export default function useLoginVisitor() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();
    const { setVisitor, setToken } = useCurrentVisitor();

    const handleLogin = useCallback(async (visitorLogin) => {
        setIsLoading(true);
        setError(null);  // Clear previous error if any

        try {
            const token = await loginVisitor(visitorLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            const VisitorFromLocalStorage = getUser();
            setVisitor(VisitorFromLocalStorage); // Decode and set visitor details
            // Successfully logged in, show success message
            setSnack('success', 'Login successful!');
        } catch (err) {
            setError(err.message);  // Set error if fetching fails
            setSnack('error', "Failed to Login");  // Show error message
        } finally {
            setIsLoading(false);
        }
    }, [setSnack, setToken, setVisitor]);

    return {
        isLoading,
        error,
        handleLogin,
    };
}
