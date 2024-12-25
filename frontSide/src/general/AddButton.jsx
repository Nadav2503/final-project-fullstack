import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddNewButton({ onAdd }) {
    return (
        <Fab
            color="primary"
            aria-label="add"
            sx={{
                position: 'fixed',
                bottom: 150,
                right: 20,
            }}
            onClick={onAdd}
        >
            <AddIcon />
        </Fab>
    );
}
