import React from 'react';
import Navbar from './Header'; // Navbar component for site navigation
import Footer from './Footer'; // Footer component for the bottom of the page
import Main from './Main'; // Main content wrapper component
import { Box } from '@mui/material'; // MUI Box component for layout

// Layout component: Wraps the main app content with a navbar, main content area, and footer.
export default function Layout({ children }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh', // Ensures the layout takes up the 100% viewport height
            }}
        >
            {/* Navbar displayed at the top of the page */}
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 10, // Ensures it stays above other content
                    backgroundColor: 'background.paper', // Ensures background is consistent
                }}
            >
                <Navbar />
            </Box>

            {/* Main content area where children components are rendered */}
            <Box
                sx={{
                    flexGrow: 1, // Allows it to expand and take up available space
                    overflow: 'auto', // Adds scroll behavior if content overflows
                }}
            >
                <Main>{children}</Main>
            </Box>

            {/* Footer displayed at the bottom of the page */}
            <Box
                sx={{
                    position: 'sticky',
                    bottom: 0,
                    zIndex: 10, // Ensures footer stays on top of other content if needed
                    backgroundColor: 'background.paper', // Matches background of footer
                }}
            >
                <Footer />
            </Box>
        </Box>
    );
}
