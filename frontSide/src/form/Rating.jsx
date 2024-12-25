import React from 'react';
import { Grid, Typography, Rating } from '@mui/material';

const RatingField = ({
    name,
    label,
    data,
    error,
    onChange,
    required = true,
    ...rest
}) => {
    return (
        <Grid item xs={12} sm={6} {...rest}>
            <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>
                {label}
            </Typography>
            <Rating
                name={name}
                value={data[name] || 0}  // Default value is 0 if none provided
                onChange={(_, newValue) => onChange(name, newValue)}
                required={required}
                size="large"
            />
            {error && <Typography variant="body2" color="error">{error}</Typography>}
        </Grid>
    );
};

export default RatingField;
