import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

export default function CardHeader({ title, image }) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            className="card-header"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: { xs: 1, sm: 2 }, // Smaller padding on small screens
            }}
        >
            <Typography
                variant="h5"
                component="h2"
                sx={{
                    textAlign: 'center',
                    color: 'text.primary',
                    fontWeight: 'bold',
                }}
            >
                {title}
            </Typography>
            {image && (
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 150,
                        height: 150, // Add fixed height for consistency
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={image.url}
                        alt={image.alt}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            )}
        </Box>
    );
}