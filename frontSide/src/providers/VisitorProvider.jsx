import React, { createContext, useContext, useState, useEffect } from 'react';
import { getToken, getUser, isAuthenticated } from '../services/LocalStorageService';

const VisitorContext = createContext();

export default function VisitorProvider({ children }) {
    const [visitor, setVisitor] = useState(null);
    const [token, setToken] = useState(getToken());
    const [authStatus, setAuthStatus] = useState(isAuthenticated()); // Check if the user is authenticated

    useEffect(() => {
        if (token) {
            const userFromLocalStorage = getUser();
            if (userFromLocalStorage) {
                setVisitor(userFromLocalStorage);
                setAuthStatus(true);
            }
        }
    }, [token]);

    return (
        <VisitorContext.Provider value={{ visitor, setVisitor, token, setToken, authStatus, setAuthStatus }}>
            {children}
        </VisitorContext.Provider>
    );
}

// Custom hook to use visitor context
export const useCurrentVisitor = () => {
    const context = useContext(VisitorContext);
    if (!context) {
        throw new Error("useCurrentVisitor must be used within VisitorProvider");
    }
    return context;
};
