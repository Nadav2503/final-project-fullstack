import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useDeleteVisitor from '../hooks/useDeleteVisitor';
import useGetAllVisitors from '../hooks/useVisitorData';
import CustomButton from '../../general/CustomButton';
import PageHeader from '../../general/PageHeader';
import ConfirmDialog from '../../general/ConfirmDialog';
import { cancelDelete, confirmDelete, handleDelete, useAdminRmcLogic } from '../helpers/adminRmcHandlers';

export default function AdminRMCPage() {
    const { visitors, fetchVisitors } = useGetAllVisitors();
    const { handleDeleteVisitor, loading: deleteLoading } = useDeleteVisitor();

    const { isMobile } = useAdminRmcLogic(fetchVisitors); // Use custom hook for logic

    const [openDialog, setOpenDialog] = useState(false); // Confirmation dialog state
    const [selectedVisitorId, setSelectedVisitorId] = useState(null); // Selected visitor ID
    const [localVisitors, setVisitors] = useState(visitors); // Manage local visitors state

    // Sync initial visitors state when fetched
    useEffect(() => {
        setVisitors(visitors);
    }, [visitors]);

    return (
        <Container>
            <PageHeader title="Admin RMC Page" />

            {isMobile ? (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(1, 1fr)', // Single column on mobile
                        gap: 2,
                        justifyContent: 'center',
                    }}
                >
                    {localVisitors.map((visitor) => (
                        <Box
                            key={visitor._id}
                            sx={{
                                border: 1,
                                borderRadius: 2,
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                backgroundColor: 'background.paper',
                                boxShadow: 1,
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                {visitor.username}
                            </Typography>
                            <Typography variant="body1">ID: {visitor._id}</Typography>
                            <Typography variant="body1">Membership Tier: {visitor.membershipTier}</Typography>
                            <Typography variant="body1">Is Admin: {visitor.isAdmin ? 'Yes' : 'No'}</Typography>
                            <Typography variant="body1">Email: {visitor.email}</Typography>

                            <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
                                <CustomButton
                                    onClick={() => handleDelete(visitor._id, setSelectedVisitorId, setOpenDialog)}
                                    color="secondary"
                                    disabled={deleteLoading}
                                >
                                    {deleteLoading ? 'Deleting...' : 'Delete'}
                                </CustomButton>
                            </Box>
                        </Box>
                    ))}
                </Box>
            ) : (
                <TableContainer component={Paper} sx={{ overflowX: 'auto', border: 1, borderRadius: 2 }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>ID</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Username</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Email</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Membership Tier</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Is Admin</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {localVisitors.map((visitor) => (
                                <TableRow key={visitor._id}>
                                    <TableCell sx={{ border: 1 }}>{visitor._id}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{visitor.username}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{visitor.email}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{visitor.membershipTier}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{visitor.isAdmin ? 'Yes' : 'No'}</TableCell>
                                    <TableCell sx={{ border: 1 }}>
                                        <CustomButton
                                            onClick={() => handleDelete(visitor._id, setSelectedVisitorId, setOpenDialog)}
                                            color="secondary"
                                            disabled={deleteLoading}
                                        >
                                            {deleteLoading ? 'Deleting...' : 'Delete'}
                                        </CustomButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Confirmation Dialog */}
            <ConfirmDialog
                open={openDialog}
                onClose={() => cancelDelete(setOpenDialog)}
                onConfirm={() => confirmDelete(selectedVisitorId, handleDeleteVisitor, setVisitors, setOpenDialog)}
                title="Confirm Deletion"
                message="Are you sure you want to delete this visitor? This action cannot be undone."
            />
        </Container>
    );
}
