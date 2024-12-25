import React from 'react';
import { Divider, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// PageHeader component: Displays a title and subtitle with a divider.
export default function PageHeader({ title, subtitle }) {
    const theme = useTheme(); // Access the current theme (light or dark)

    return (
        <Container
            sx={{
                display: 'flex', // Use flexbox for layout
                flexDirection: 'column', // Stack elements vertically
                alignItems: 'center', // Center the elements horizontally
                textAlign: 'center', // Center the text
                marginTop: 5, // Space from the top
                marginBottom: 3, // Space from the bottom
            }}
        >
            {/* Title section */}
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    color: theme.palette.text.main, // Use primary color from the theme
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
                }}
            >
                {title}
            </Typography>

            {/* Subtitle section */}
            <Typography
                variant="h5"
                component="h2"
                sx={{
                    color: theme.palette.text.secondary, // Use secondary text color from the theme
                    marginTop: 2, // Space between title and subtitle
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' }, // Responsive font size
                }}
            >
                {subtitle}
            </Typography>

            {/* Divider to separate title and content */}
            <Divider sx={{ my: 2, width: '100%', maxWidth: '600px' }} />
        </Container>
    );
}
