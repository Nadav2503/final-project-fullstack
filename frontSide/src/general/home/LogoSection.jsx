import React from 'react';
import { Box } from '@mui/material';
import Logo from '/images/zooLogo.png';

const LogoSection = () => (
    <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <img
            src={Logo}
            alt="Virtual Zoo Logo"
            style={{
                width: '250px',
                marginBottom: '30px',
            }}
        />
    </Box>
);

export default LogoSection;
