import { useCallback } from 'react';
import { removeToken } from '../../services/LocalStorageService';
import { useSnack } from '../../providers/SnackbarProvider';
import { useCurrentVisitor } from '../../providers/VisitorProvider';

const useLogout = () => {
    const setSnack = useSnack();
    const { setToken, setVisitor, setAuthStatus } = useCurrentVisitor(); // Added setAuthStatus here

    const handleLogout = useCallback(() => {
        removeToken();  // Remove the token from localStorage
        setToken(null);  // Reset the token in the global state
        setVisitor(null); // Reset the user state in the global state
        setAuthStatus(false); // Manually set authStatus to false
        setSnack('success', 'Logged out successfully');
    }, [setSnack, setToken, setVisitor, setAuthStatus]);

    return { handleLogout };
};

export default useLogout;
