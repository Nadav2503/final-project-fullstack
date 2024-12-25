import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

// Error component: Displays an error message with an image when something goes wrong.
export default function Error({ errorMessage }) {
    return (
        <Container sx={{ textAlign: 'center', marginTop: 5 }}>
            {/* Grid container to structure the error message and image */}
            <Grid container spacing={2} justifyContent="center">
                {/* Error message container */}
                <Grid item xs={12} md={8}>
                    {/* Displaying the error message dynamically */}
                    <Typography variant="h5" color="error">
                        Oops... something went wrong: {errorMessage}
                    </Typography>
                </Grid>
                {/* Error image container */}
                <Grid item xs={12} md={4}>
                    <img
                        width="100%" // Ensure the image fills the available width
                        src="/images/robot.png" // Error image
                        alt="Error Illustration" // Alt text for accessibility
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
