import React, { useCallback } from "react";
import ExhibitForm from "../components/ExhibitForm";
import initializeExhibit from "../helpers/initializeExhibit";
import { useNavigate } from "react-router-dom";
import useForm from "../../form/useForm";
import useCreateExhibit from "../hooks/useCreateExhibit";
import exhibitSchema from "../model/exhibitSchema";
import { Box, Container } from "@mui/material";
import ROUTES from "../../routers/routerModel";

export default function AddExhibitPage() {
    const { handleCreateExhibit } = useCreateExhibit();
    const navigate = useNavigate();

    const handleSubmit = useCallback(async (formData) => {
        try {
            await handleCreateExhibit(formData);
            navigate(ROUTES.EXHIBITS);  // Use ROUTES.EXHIBITS for navigation
        } catch (error) {
            console.error("Failed to create exhibit:", error);
        }
    }, [handleCreateExhibit]);

    const { data, errors, handleChange, validateForm, onSubmit } = useForm(
        initializeExhibit,  // Initialize the form with an empty exhibit structure
        exhibitSchema,      // Validate using the custom function
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
                <ExhibitForm
                    title="Add New Exhibit"
                    submitLabel="Create Exhibit"
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