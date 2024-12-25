import React from 'react';
import { IconButton, Drawer, List, ListItem, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarItem from './NavbarItem';
import ROUTES from '../../../routers/routerModel';
import { isAuthenticated } from '../../../services/LocalStorageService';

export default function HamburgerMenu({ isOpen, toggleHamburgerMenu }) {
    const theme = useTheme();
    const toggleDrawer = () => toggleHamburgerMenu();
    const isLoggedIn = isAuthenticated();

    return (
        <>
            <IconButton onClick={toggleDrawer} color="inherit">
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer}
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                    },
                }}
            >
                <List>
                    <ListItem onClick={toggleDrawer}>
                        <NavBarItem to={ROUTES.ROOT} label="Home" variant="vertical" />
                    </ListItem>
                    <ListItem onClick={toggleDrawer}>
                        <NavBarItem to={ROUTES.ABOUT} label="About" variant="vertical" />
                    </ListItem>
                    {isLoggedIn && (
                        <ListItem onClick={toggleDrawer}>
                            <NavBarItem to={ROUTES.MAP} label="Map" variant="vertical" />
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </>
    );
}
