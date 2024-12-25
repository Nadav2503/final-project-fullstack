import React from 'react';
import CardBody from '../../../general/card/CardBody';
import { Rating, Typography, Box } from '@mui/material';

export default function ReviewBody({ comment, rating, date }) {
    const content = (
        <>
            <Typography variant="body1">{comment}</Typography> {/* Review Comment */}

            <Box display="flex" alignItems="center" justifyContent="space-between" mt={2} width="100%">
                <Box display="flex" alignItems="center">
                    <Typography variant="body2" mr={1}><strong>Rating:</strong></Typography> {/* Label */}
                    <Rating name="read-only" value={rating} readOnly /> {/* Rating */}
                </Box>
                <Typography variant="body2"><strong>Date:</strong>{new Date(date).toLocaleDateString()}</Typography> {/* Review Date */}
            </Box>
        </>
    );

    return <CardBody content={content} />;
}
