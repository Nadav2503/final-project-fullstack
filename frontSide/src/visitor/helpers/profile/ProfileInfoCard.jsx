import React from "react";
import { Card, CardContent, Box, Avatar, Typography, Grid } from "@mui/material";
import CustomButton from "../../../general/CustomButton";

export default function ProfileInfoCard({ visitor, handleEditProfile }) {
    return (
        <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
            <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                    <Avatar
                        alt={`${visitor.image?.alt}`}
                        src={visitor.image?.url || "/images/avatar.png"}
                        sx={{ width: 100, height: 100, mr: 2, borderRadius: '50%' }}
                    />
                    <Box>
                        <Typography variant="h5">{`${visitor.name.first} ${visitor.name.middle} ${visitor.name.last}`}</Typography>
                        <Typography variant="body1" color="textSecondary">{visitor.username}</Typography>
                    </Box>
                </Box>

                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1"><strong>Email:</strong> {visitor.email}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1"><strong>Phone:</strong> {visitor.phone || "N/A"}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1"><strong>Membership Tier:</strong> {visitor.membershipTier}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1"><strong>Admin:</strong> {visitor.isAdmin ? "Yes" : "No"}</Typography>
                    </Grid>
                </Grid>

                <Box display="flex" justifyContent="flex-end" mt={3}>
                    <CustomButton
                        variant="contained"
                        color="secondary"
                        onClick={handleEditProfile}
                    >
                        Edit Profile
                    </CustomButton>
                </Box>
            </CardContent>
        </Card>
    );
}
