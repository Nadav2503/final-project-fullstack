import React from 'react';
import { Box } from '@mui/material';
import NavBarItem from './NavbarItem';
import ROUTES from '../../../routers/routerModel';
import { useCurrentVisitor } from '../../../providers/VisitorProvider';  // Using the context

export default function Navbar() {
    const { authStatus } = useCurrentVisitor(); // Get authStatus from context

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <NavBarItem to={ROUTES.ROOT} label="Home" />
                <NavBarItem to={ROUTES.ABOUT} label="About" />
                {authStatus && <NavBarItem to={ROUTES.MAP} label="Map" />}
            </Box>
        </Box>
    );
}
