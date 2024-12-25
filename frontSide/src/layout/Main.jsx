import React from 'react';
import { Box, useTheme } from '@mui/material';

export default function Main({ children }) {
    const theme = useTheme();

    return (
        <Box
            component="main"
            sx={{
                minHeight: "100%",
                padding: '2rem',
                backgroundColor: theme.palette.background.default, // Footer background color
                color: theme.palette.text.primary, // Text color based on theme
                transition: 'background-color 0.3s, color 0.3s'
            }}
        >
            {children}
        </Box>
    );
}
