import React from 'react';
import { Box, Typography } from '@mui/material';
import AvatarProfileImage from './Avatar';
import AvatarMenu from './AvatarMenuAnchor';
import useAnchor from '../useAnchor';
export default function RightHeader() {
    const { anchorEl, handleAnchorClick, handleAnchorClose } = useAnchor();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                gap: 1, // Adds spacing between the avatar and username
            }}
        >
            {/* Avatar button */}
            <AvatarProfileImage onClick={handleAnchorClick} />
            {/* Dropdown menu */}
            <AvatarMenu anchorEl={anchorEl} onClose={handleAnchorClose} />
        </Box>
    );
}
