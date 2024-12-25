import React from 'react';
import { Box } from '@mui/material';

const Card = ({ children }) => {
    return (
        <Box
            className="card"
            sx={{
                display: 'flex',
                flexDirection: 'column', // Stack child components vertically
                borderRadius: 2, // Rounded corners for the card
                boxShadow: 3, // Adding shadow for depth
                overflow: 'hidden', // Ensures the content doesn't spill out
                width: '100%',
                maxWidth: 400, // Restrict card width on larger screens
                margin: 'auto', // Centers the card horizontally
                backgroundColor: 'background.paper', // Uses the theme's background color
            }
            }
        >
            {children}  {/* Render all the child components (ExhibitCardHeader, ExhibitCardBody, etc.) */}
        </Box>
    );
};

export default Card;