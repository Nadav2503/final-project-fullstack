import { useState, useCallback } from 'react';
import { registerVisitor } from '../../services/VisitorServiceApi';
import { getUser, setTokenInLocalStorage } from '../../services/LocalStorageService';
import { useSnack } from '../../providers/SnackbarProvider';
import { useCurrentVisitor } from '../../providers/VisitorProvider';
import normalizeProfileForSignup from '../helpers/normalize/normalizeProfileForSignup';
import useLoginVisitor from './useLoginVisitor';

export default function useSignupVisitor() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();
    const { setVisitor, setToken } = useCurrentVisitor();
    const { handleLogin } = useLoginVisitor();

    const handleSignup = useCallback(async (visitor) => {
        setIsLoading(true);
        setError(null);  // Clear any previous errors

        try {
            const normalizedVisitor = normalizeProfileForSignup(visitor);
            const { token } = await registerVisitor(normalizedVisitor);
            setTokenInLocalStorage(token);
            setToken(token);
            setVisitor(getUser());
            const credentials = {
                username_or_email: normalizedVisitor.email,
                password: normalizedVisitor.password,
            };

            await handleLogin(credentials);

            setSnack('success', 'Signup successful!');
        } catch (err) {
            setError(err.message);
            setSnack('error', "Signup failed");
        } finally {
            setIsLoading(false);
        }
    }, [setSnack, setToken, setVisitor, handleLogin]);

    return {
        isLoading,
        error,
        handleSignup,
    };
}
