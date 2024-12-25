import React from 'react';
import { Typography } from '@mui/material';
import { Pets, Public } from '@mui/icons-material';

const TitleSection = ({ theme }) => (
    <>
        <Pets sx={{ fontSize: '3rem' }} />
        <Typography
            variant="h1"
            sx={{
                color: theme.palette.text.primary,
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', sm: '3rem' },
                textAlign: 'center',
                marginBottom: 3,
                textShadow: `3px 3px 6px ${theme.palette.mode === 'dark' ? '#000' : '#aaa'}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Public sx={{ marginRight: '8px', fontSize: '2rem' }} />
            Welcome to the Virtual Zoo
            <Public sx={{ marginLeft: '8px', fontSize: '2rem' }} />
        </Typography>
    </>
);

export default TitleSection;
