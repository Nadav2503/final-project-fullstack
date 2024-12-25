import React from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';

export default function CardActionBar({ actions = [] }) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            className="card-actions"
            sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                justifyContent: 'space-between',
                gap: 1,
                padding: 2,
                width: '100%',
            }
            }
        >
            {
                actions.map((action, index) => (
                    <IconButton
                        key={index}
                        onClick={action.onClick}
                        color={action.active ? 'primary' : 'default'}
                        sx={{
                            width: isSmallScreen ? '100%' : 'auto',
                            textAlign: 'center',
                        }}
                    >
                        {action.icon}
                    </IconButton>
                ))}
        </Box>
    );
}