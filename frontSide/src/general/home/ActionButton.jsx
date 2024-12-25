import React from 'react';
import { Stack } from '@mui/material';
import { LocalOffer, Map } from '@mui/icons-material';
import CustomButton from '../CustomButton';

const ActionButtons = ({ authStatus, onBuyTicketClick, onEnterZooClick }) => (
    <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 4,
        }}
    >
        {!authStatus && (
            <CustomButton
                color="primary"
                size="large"
                startIcon={<LocalOffer />}
                sx={{ width: '200px' }}
                onClick={onBuyTicketClick}
            >
                Buy Ticket
            </CustomButton>
        )}
        <CustomButton
            color="secondary"
            size="large"
            startIcon={<Map />}
            sx={{ width: '200px' }}
            onClick={onEnterZooClick}
        >
            Enter Zoo
        </CustomButton>
    </Stack>
);

export default ActionButtons;
