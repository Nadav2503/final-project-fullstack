import React from 'react';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import { useTheme } from '@mui/material/styles'; // Import the useTheme hook to access theme
import ROUTES from '../../../routers/routerModel';

export default function CompanyName() {
    const navigate = useNavigate();
    const theme = useTheme(); // Use the useTheme hook to get the current theme

    // Handle company name click event to navigate to the home page
    const handleCompanyNameClick = () => {
        navigate(ROUTES.ROOT); // Navigate to the home page
    };

    return (
        <Typography
            variant="h6" // Styling for the company name (header size)
            color="inherit" // Inherits the color from the parent theme
            onClick={handleCompanyNameClick} // Click handler to navigate to home
            sx={{
                cursor: 'pointer', // Makes the text look clickable
                // Responsive: Hide company name on small screens (<600px) for better layout
                [theme.breakpoints.down('sm')]: {
                    display: 'none', // Hide company name on small screens like mobile
                },
            }}
        >
            Virtual Zoo
        </Typography>
    );
}
