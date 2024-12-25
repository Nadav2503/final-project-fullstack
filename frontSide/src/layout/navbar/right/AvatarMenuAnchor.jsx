import React from 'react';
import { Menu, Box, MenuItem, Typography } from '@mui/material';
import SwitchMode from './SwitchMode';
import NavBarItem from '../middle/NavbarItem';
import useLogout from '../../../visitor/hooks/useLogout';
import ROUTES from '../../../routers/routerModel';
import { useCurrentVisitor } from '../../../providers/VisitorProvider';  // Using context
import { getUser } from '../../../services/LocalStorageService';

export default function AvatarMenu({ anchorEl, onClose }) {
    const user = getUser();  // Get the current user from localStorage
    const { authStatus } = useCurrentVisitor();  // Get visitor and authStatus from context
    const { handleLogout } = useLogout();

    // Conditionally check for user existence before accessing _id
    const userId = user ? user._id : null;

    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
            PaperProps={{
                sx: {
                    padding: 2,
                    backgroundColor: 'background.paper',
                    minWidth: { xs: '200px', sm: '250px' },
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                {authStatus ? (
                    <>
                        <NavBarItem label="Profile" variant="vertical" to={ROUTES.PROFILE} onClick={onClose} />
                        {/* Make sure userId exists before passing it */}
                        {userId && (
                            <NavBarItem
                                label="Edit Profile"
                                variant="vertical"
                                to={`${ROUTES.EDIT_PROFILE}/${userId}`}
                                onClick={onClose}
                            />
                        )}
                        {user?.isAdmin && (
                            <NavBarItem label="Admin" variant="vertical" to={ROUTES.ADMIN} onClick={onClose} />
                        )}
                        <NavBarItem label="Logout" variant="vertical" to={ROUTES.ROOT} onClick={() => {
                            handleLogout(); onClose();
                        }} />
                    </>
                ) : (
                    <>
                        <NavBarItem label="Login" variant="vertical" onClick={onClose} to={ROUTES.LOGIN} />
                        <NavBarItem label="Signup" variant="vertical" onClick={onClose} to={ROUTES.SIGNUP} />
                    </>
                )}
                <MenuItem onClick={onClose}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <SwitchMode />
                    </Box>
                </MenuItem>
            </Box>
        </Menu>
    );
}
