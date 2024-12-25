// Importing React and necessary components from MUI.
import React from 'react';
import { AppBar, Toolbar, useTheme } from '@mui/material'; // MUI components for app bar and toolbar.
import LeftHeader from './navbar/left/LeftHeader'; // Left section of the header, e.g., logo.
import MiddleHeader from './navbar/middle/MiddleHeader'; // Middle section of the header, e.g., app title or links.
import RightHeader from './navbar/right/RightHeader'; // Right section of the header, e.g., user profile or notifications.

export default function Header() {
    const theme = useTheme(); // Access the current theme (dark or light mode).

    return (
        <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
            {/* AppBar: The main container for the header */}
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {/* Toolbar: Used to align and organize the header sections */}
                <LeftHeader /> {/* Left section of the header */}
                <MiddleHeader /> {/* Middle section of the header */}
                <RightHeader /> {/* Right section of the header */}
            </Toolbar>
        </AppBar>
    );
}
