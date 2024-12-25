import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import AnimalCard from "../../../animal/components/card/AnimalCard";

export default function PreferredAnimalsSection({ animalsDetails, handleFavoriteToggle }) {

    return (
        <Box mt={4}>
            <Typography variant="h5" mb={2} align="center">
                Preferred Animals
            </Typography>

            <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, alignItems: "stretch" }}>
                {animalsDetails.map((animal) => (
                    <AnimalCard
                        key={animal._id}
                        animal={animal}
                        handleFavoriteToggle={handleFavoriteToggle}
                        isLiked={animal.isLiked}
                        handleDelete={null}
                        handleEditAnimal={null}
                    />
                ))}
            </Container>
            <Divider sx={{ my: 3 }} />
        </Box>
    );
}
