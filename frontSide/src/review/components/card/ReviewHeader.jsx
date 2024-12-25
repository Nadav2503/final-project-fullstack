import React from 'react';
import CardHeader from '../../../general/card/CardHeader';

export default function ReviewHeader({ visitorId }) {
    return <CardHeader title={visitorId} />; // will replace with the username
}
