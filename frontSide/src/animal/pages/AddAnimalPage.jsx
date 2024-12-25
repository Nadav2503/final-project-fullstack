import React, { useCallback, useEffect, useState } from "react";
import AnimalAddForm from "../components/AnimaAddForm";
import initializeAnimal from "../helpers/initializeAnimal";
import { useNavigate, useLocation } from "react-router-dom";
import useForm from "../../form/useForm";
import useCreateAnimal from "../hooks/useCreateAnimal";
import animalSchema from "../model/animalSchema";
import { Box, Container } from "@mui/material";
import ROUTES from "../../routers/routerModel";
import useUpdateAnimalsInExhibit from "../../Exhibit/hooks/useUpdateAnimalsInExhibit";

export default function AddAnimalPage() {
    const location = useLocation();
    const [exhibitId, setExhibitId] = useState(null);
    const { handleCreateAnimal, animal } = useCreateAnimal();
    const { handleUpdateAnimals } = useUpdateAnimalsInExhibit();
    const navigate = useNavigate();

    // Extract exhibitId from location state
    useEffect(() => {
        if (location.state && location.state.exhibitId) {
            setExhibitId(location.state.exhibitId);
        }
    }, [location]);

    // Effect to add the created animal to the exhibit
    useEffect(() => {
        const addAnimalToExhibit = async () => {
            if (animal && exhibitId) {
                try {
                    await handleUpdateAnimals(exhibitId, {
                        addAnimals: [animal._id],
                    });
                    navigate(ROUTES.EXHIBITS);
                } catch (error) {
                    console.error("Error adding animal to exhibit:", error);
                }
            }
        };

        addAnimalToExhibit();
    }, [animal, exhibitId, handleUpdateAnimals, navigate]);

    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleCreateAnimal(formData);
            } catch (error) {
                console.error("Error creating animal:", error);
            }
        },
        [handleCreateAnimal]
    );

    const { data, errors, handleChange, validateForm, onSubmit } = useForm(
        initializeAnimal,
        animalSchema,
        handleSubmit
    );

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <AnimalAddForm
                    title="Add New Animal"
                    submitLabel="Create Animal"
                    onSubmit={onSubmit}
                    validateForm={validateForm}
                    errors={errors}
                    data={data}
                    onInputChange={handleChange}
                />
            </Box>
        </Container>
    );
}
