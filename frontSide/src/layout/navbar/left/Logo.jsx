import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import { useTheme } from '@mui/material/styles'; // Import the useTheme hook to access theme
import ROUTES from '../../../routers/routerModel';

export default function Logo() {
    const navigate = useNavigate();
    const theme = useTheme(); // Use the useTheme hook to get the current theme

    // Handle logo click event to navigate to the home page
    const handleLogoClick = () => {
        navigate(ROUTES.ROOT); // Navigate to the home page
    };

    return (
        <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
            onClick={handleLogoClick}
        >
            <Avatar
                src="/images/zooLogo.png" // Path to the logo image
                alt="Zoo logo"
                sx={{
                    width: 100,
                    height: 40,
                    borderRadius: '50%',
                    // Add responsive styles for different screen sizes
                    [theme.breakpoints.down('sm')]: {
                        width: 80, // Smaller size on small screens
                        height: 30, // Adjust height proportionally
                    },
                }}
            />
        </IconButton>
    );
}
