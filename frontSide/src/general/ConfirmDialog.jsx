import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import CustomButton from './CustomButton';

export default function ConfirmDialog({ open, onClose, onConfirm, title, message }) {
    return (
        <Dialog
            open={open} // Controls the visibility of the dialog
            onClose={onClose} // Closes the dialog when clicking outside or pressing the escape key
            fullWidth // Ensures the dialog uses the full width on smaller screens
            maxWidth="sm" // Limits the width of the dialog on larger screens for readability
        >
            {/* Dialog title */}
            <DialogTitle>{title}</DialogTitle>

            {/* Dialog content with the confirmation message */}
            <DialogContent>
                <Typography variant="body1">{message}</Typography>
            </DialogContent>

            {/* Dialog actions with Cancel and Confirm buttons */}
            <DialogActions>
                {/* Cancel button, triggers onClose when clicked */}
                <CustomButton onClick={onClose} color="secondary">
                    Cancel
                </CustomButton>

                {/* Confirm button, triggers onConfirm when clicked */}
                <CustomButton onClick={onConfirm} color="primary">
                    Confirm
                </CustomButton>
            </DialogActions>
        </Dialog>
    );
}
