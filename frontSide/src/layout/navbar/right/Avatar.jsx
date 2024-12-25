import React from 'react';
import { IconButton, Avatar } from '@mui/material';

export default function AvatarProfileImage({ onClick }) {
    return (
        <IconButton
            onClick={onClick} // Executes the provided click handler
            color="inherit" // Inherits color from the theme or parent
        >
            {/* Avatar displaying the user's profile image */}
            <Avatar
                alt="User Avatar" // Accessibility text for screen readers
                src="/images/avatar.png" // Path to the user's avatar imag
            />
        </IconButton>
    );
}
