import React from 'react';
import { Button, Typography, useTheme } from '@mui/material';
import NavBarLink from './NavbarLink'; // Component that renders the link for navigation
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook

export default function NavBarItem({ to, sx, label, variant = 'horizontal', onClick }) {
    const theme = useTheme(); // Access the current theme for dynamic styling
    const isVertical = variant === 'vertical'; // Check if the item is to be rendered vertically or horizontally
    const navigate = useNavigate(); // Accessing the navigation function

    const handleClick = (event) => {
        if (onClick) onClick(event); // Execute additional actions passed through the `onClick` prop (e.g., logout)
        if (to) {
            // Navigate to the route
            setTimeout(() => navigate(to), 200); // Adding delay for menu close before navigating
        }
    };

    return (
        <NavBarLink to={to} sx={{ display: isVertical ? 'block' : 'inline-block', width: isVertical ? '100%' : 'auto', textAlign: isVertical ? 'center' : 'left', ...sx }}>
            <Button
                color="inherit"
                fullWidth={isVertical} // Full width for vertical layout
                sx={{
                    textTransform: 'none', // Disable uppercase transformation
                    padding: isVertical ? '12px' : '8px 16px', // Adjust padding based on layout
                    borderRadius: '8px', // Rounded corners for button
                    marginBottom: isVertical ? 1 : 0, // Space below button if vertical
                    marginRight: isVertical ? 0 : 1, // Space to the right if horizontal
                    backgroundColor: theme.palette.background.paper, // Dynamic background color based on theme
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main, // Hover background color
                    },
                }}
                onClick={handleClick} // Attach the click handler here
            >
                <Typography sx={{ color: theme.palette.text.primary }}>{label}</Typography>
            </Button>
        </NavBarLink>
    );
}
