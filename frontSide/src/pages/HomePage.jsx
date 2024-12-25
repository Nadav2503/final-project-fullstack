import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useCurrentVisitor } from '../providers/VisitorProvider';
import { useSnack } from '../providers/SnackbarProvider';
import LogoSection from '../general/home/LogoSection';
import TitleSection from '../general/home/TitleSection';
import ActionButtons from '../general/home/ActionButton';
import DescriptionSection from '../general/home/DescriptionSection';
import { handleBuyTicketClick, handleEnterZooClick } from '../general/home/hooks/homeHandler';
// Import handler functions

export default function Home() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { authStatus } = useCurrentVisitor();
    const setSnack = useSnack();

    return (
        <Box
            sx={{
                background: theme.palette.mode === 'dark' ? '#1F4529' : '#C2FFC7',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 4,
            }}
        >
            <LogoSection />
            <TitleSection theme={theme} />
            <ActionButtons
                authStatus={authStatus}
                onBuyTicketClick={() => handleBuyTicketClick(navigate)}
                onEnterZooClick={() => handleEnterZooClick(authStatus, setSnack, navigate)}
            />
            <DescriptionSection theme={theme} />
        </Box>
    );
}
