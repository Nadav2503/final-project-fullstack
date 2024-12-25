import React from 'react';
import CardBody from '../../../general/card/CardBody';
import { Typography } from '@mui/material';

export default function ExhibitBody({ description, capacity, location, status }) {
    const content = (
        <>
            <Typography variant="body1" > <strong>Description:</strong> {description}</Typography >
            <Typography variant="body1" > <strong>Max Capacity: </strong> {capacity}</Typography >
            <Typography variant="body1" > <strong>Location: </strong> {location}</Typography >
            <Typography variant="body1" > <strong>Status: </strong> {status}</Typography >
        </>
    );

    return <CardBody content={content} />;
}