import React from "react";
import AnimalCard from "./card/AnimalCard";
import { Container } from "@mui/material";

export default function Animals({ animals, handleDelete, handleEditAnimal, handleFavoriteToggle }) {
    return (
        <Container
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'stretch',
            }}
        >
            {animals.map((animal) => (
                <AnimalCard
                    animal={animal}
                    key={animal._id}
                    handleDelete={handleDelete}
                    handleEditAnimal={handleEditAnimal}
                    handleFavoriteToggle={handleFavoriteToggle}
                    isLiked={animal.isLiked}
                />
            ))}
        </Container>
    );
}
