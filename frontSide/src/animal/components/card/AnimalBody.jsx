import React from 'react';
import CardBody from '../../../general/card/CardBody';
import { Typography } from '@mui/material';

export default function AnimalBody({ type, gender, age }) {
    const content = (
        <>
            <Typography variant="body1"><strong>Type:</strong> {type}</Typography>
            <Typography variant="body1"><strong>Gender:</strong> {gender}</Typography>
            <Typography variant="body1"><strong>Age:</strong> {age} years old</Typography>
        </>
    );

    return <CardBody content={content} />;
}
