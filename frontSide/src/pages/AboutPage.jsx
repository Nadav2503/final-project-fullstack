import React from 'react';
import { Container, Typography } from '@mui/material';
import PageHeader from '../general/PageHeader'; // Import PageHeader component

// AboutPage component that provides information about the Virtual Zoo.
export default function About() {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex', // Flexbox layout for centering content.
                flexDirection: 'column', // Stacks content vertically.
                justifyContent: 'center', // Centers content vertically within the container.
                alignItems: 'center', // Centers content horizontally.
                textAlign: 'center', // Centers text within the container.
                padding: { xs: '1rem', sm: '2rem' }, // Adjust padding for responsiveness.
            }}
        >
            {/* PageHeader component for title section */}
            <PageHeader
                title="About the Virtual Zoo"
                subtitle="Learn more about the Virtual Zoo, its exhibits, and the mission."
            />

            {/* Main content of the About page */}
            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
                    lineHeight: 1.6, // Improves readability with proper line spacing.
                    maxWidth: '800px', // Limits the width of the text for better layout.
                    marginBottom: 4, // Space below the first paragraph
                }}
            >
                Welcome to the Virtual Zoo! Our zoo brings you closer to the
                animal kingdom, allowing you to explore different exhibits,
                learn about wildlife, and experience the beauty of nature right
                from the comfort of your home. We are dedicated to providing an
                immersive and educational experience for all ages. Join us on an
                exciting journey to discover animals, their habitats, and the
                importance of conservation.
            </Typography>

            {/* Secondary description with a softer tone */}
            <Typography
                variant="body2"
                sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' }, // Adjust font size for smaller screens
                    color: '#777', // Subtle text color for less emphasis.
                }}
            >
                Experience the wonders of the animal kingdom without leaving your
                home. We hope you enjoy your visit to the Virtual Zoo!
            </Typography>
        </Container>
    );
}
