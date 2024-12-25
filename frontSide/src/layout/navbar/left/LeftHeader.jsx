import React from 'react';
import Logo from './Logo';
import CompanyName from './CompanyName';
import { useMediaQuery, useTheme, Box } from '@mui/material'; // MUI hooks to handle responsive design

export default function LeftHeader() {
    const theme = useTheme(); // Get current theme (light or dark mode)
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small

    return (
        <Box style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
            {/* Logo on the left side */}
            <Logo />
            {/* Company name with overflow handling */}
            <Box
                style={{
                    minWidth: 0,
                    overflow: 'hidden',
                    whiteSpace: isSmallScreen ? 'nowrap' : 'normal', // Prevent text from overflowing on small screens
                    textOverflow: 'ellipsis' // Add ellipsis when text overflows
                }}
            >
                <CompanyName />
            </Box>
        </Box>
    );
}
