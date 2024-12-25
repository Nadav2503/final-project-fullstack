import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for programmatic navigation

export default function NavBarLink({ to, sx, children }) {
    const navigate = useNavigate(); // Accessing the navigation function from react-router-dom

    // Function to navigate to the provided route when clicked
    const handleClick = () => {
        navigate(to); // Programmatically navigate to the target route (to)
    };

    return (
        <Box onClick={handleClick} style={{ cursor: 'pointer', ...sx }}>
            {children} {/* Render the children elements (could be buttons, text, etc.) */}
        </Box>
    );
}
