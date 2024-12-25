import React, { createContext, useState, useCallback, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { isAuthenticated } from '../services/LocalStorageService';

// Context for managing and accessing theme data.
const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
    const isLoggedIn = isAuthenticated(); // Check if the user is logged in

    // Retrieve the saved theme from localStorage if logged in, otherwise default to 'light'
    const savedTheme = isLoggedIn ? localStorage.getItem('theme') || 'light' : 'light';
    const [isDark, setIsDark] = useState(savedTheme === 'dark');

    // Toggle function for changing the theme
    const toggleDarkMode = useCallback(() => {
        const newMode = isDark ? 'light' : 'dark';
        setIsDark(!isDark);

        // Save the new theme only if the user is logged in
        if (isLoggedIn) {
            localStorage.setItem('theme', newMode);
        }
    }, [isDark, isLoggedIn]);

    // Create a custom Material-UI theme based on the current mode
    const theme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
            ...(isDark
                ? {
                    primary: { main: '#3D5300' },
                    background: {
                        default: '#1F4529',
                        paper: '#47663B',
                    },
                    text: {
                        primary: '#E8ECD7',
                        secondary: '#B0BEC5',
                    },
                }
                : {
                    primary: { main: '#FFE31A' },
                    background: {
                        default: '#C2FFC7',
                        paper: '#EED3B1',
                    },
                    text: {
                        primary: '#62825D',
                        secondary: '#616161',
                    },
                }),
        },
        typography: {
            h5: {
                fontSize: '2rem',
                '@media (max-width:600px)': {
                    fontSize: '1.5rem',
                },
            },
        },
        spacing: 8,
    });

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

// Custom hook to access the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within CustomThemeProvider');
    }
    return context;
};
