import React from 'react';
import { Box, useMediaQuery } from '@mui/material';

export default function CardBody({ content }) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            className="card-body"
            sx={{
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                backgroundColor: 'background.paper',
                boxShadow: 1,
                borderRadius: 1,
                width: '100%',
                maxWidth: isSmallScreen ? '100%' : '500px',
            }
            }
        >
            {/* Render the content directly as children */}
            {content}
        </Box>
    );
}