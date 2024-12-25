import React from 'react';
import { Button } from '@mui/material'; // Import necessary MUI Button component
import Loader from './Loader'; // Import the Loader component for loading state

export default function CustomButton({
    variant = 'contained', // Default is 'contained'
    color = 'primary', // Default color is 'primary'
    startIcon = null, // No start icon by default
    endIcon = null, // No end icon by default
    loading = false, // Button is not loading by default
    onClick, // Handle button click
    disabled = false, // Button is enabled by default
    size = 'medium', // Default size is medium
    children, // Button text or children passed inside
}) {
    return (
        <Button
            variant={variant} // Button variant: 'contained', 'outlined', etc.
            color={color} // Button color: 'primary', 'secondary', etc.
            startIcon={startIcon} // Optional start icon
            endIcon={endIcon} // Optional end icon
            onClick={onClick} // Click handler for the button
            disabled={disabled || loading} // Disable button if loading or manually disabled
            size={size} // Button size: 'small', 'medium', 'large'
            sx={{
                padding: '10px 20px', // Custom padding for the button
                fontSize: '16px', // Font size for button text
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Button shadow
                '&:hover': {
                    transform: 'scale(1.05)', // Slight zoom effect on hover
                    transition: 'transform 0.2s ease-in-out', // Smooth hover transition
                },
                // Make button more responsive
                '@media (max-width:600px)': {
                    fontSize: '14px', // Reduce font size on smaller screens
                    padding: '8px 16px', // Adjust padding on smaller screens
                },
            }}
        >
            {loading ? (
                <Loader size={24} color="inherit" /> // Display loader icon when loading
            ) : (
                children // Display the button's content (text or children)
            )}
        </Button>
    );
}
