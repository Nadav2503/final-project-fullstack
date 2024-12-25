import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../general/PageHeader'; // Import PageHeader for the title and subtitle
import Error from '../general/Error'; // Import Error component for the error message
import CustomButton from '../general/CustomButton'; // Import the CustomButton for navigation
import ROUTES from '../routers/routerModel';

export default function ErrorPage() {
    const navigate = useNavigate(); // Hook for programmatic navigation.

    // Function to navigate back to the Home page.
    const handleGoBack = () => {
        navigate(ROUTES.ROOT); // Redirects user to the homepage.
    };

    return (
        <Box
            sx={{
                display: 'flex', // Flexbox layout for centering content
                flexDirection: 'column', // Stack content vertically
                justifyContent: 'center', // Center content vertically
                alignItems: 'center', // Center content horizontally
                height: '100vh', // Full viewport height
                textAlign: 'center', // Center text
                backgroundColor: 'background.default', // Set background color based on theme
                color: 'text.primary', // Set text color based on theme
                padding: 4, // Padding around the content
            }}
        >
            {/* PageHeader component to display error title and subtitle */}
            <PageHeader
                title="Error 404" // Main error title
                subtitle="Oops! The page you're looking for doesn't exist." // Subtitle providing more context
            />

            {/* Use the Error component for the error illustration and message */}
            <Error /> {/* This component now handles both error display and image */}

            {/* Button to redirect to the homepage */}
            <CustomButton
                variant="contained"
                color="primary"
                sx={{
                    padding: '10px 20px',
                    fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size for button
                    borderRadius: 2, // Rounded button edges
                }}
                onClick={handleGoBack} // OnClick will navigate to the home page
            >
                Go Back to Home
            </CustomButton>
        </Box>
    );
}
