import React from 'react';
import { Container, Typography } from '@mui/material';

const DescriptionSection = ({ theme }) => (
    <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography
            variant="h4"
            sx={{
                color: theme.palette.text.primary,
                fontWeight: 500,
                marginBottom: 3,
            }}
        >
            Discover the wonders of the animal kingdom from your home!
        </Typography>
        <Typography
            variant="body1"
            sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
            }}
        >
            Experience the zoo like never before with interactive exhibits, animal facts,
            and live cams! Whether you're here to learn, explore, or simply have fun,
            the Virtual Zoo is your gateway to a wild adventure.
        </Typography>
    </Container>
);

export default DescriptionSection;
