import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import ExhibitForm from "../components/ExhibitForm";
import useForm from "../../form/useForm";
import useExhibitById from "../hooks/useExhibitDataById";
import useUpdateExhibit from "../hooks/useUpdateExhibit";
import exhibitSchema from "../model/exhibitSchema";
import normalizeExhibit from "../helpers/normalizeExhibit";
import initializeExhibit from "../helpers/initializeExhibit";
import ROUTES from "../../routers/routerModel";

export default function EditExhibitPage() {
    const { id } = useParams(); // Extract exhibit ID from URL
    const navigate = useNavigate();
    const { exhibit, fetchExhibitById } = useExhibitById(); // Fetch the exhibit data by ID
    const { handleUpdateExhibit } = useUpdateExhibit(); // Hook for handling exhibit updates

    // Handle form submission
    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleUpdateExhibit(id, formData); // Update the exhibit using the ID and form data
                navigate(ROUTES.EXHIBITS); // Redirect to the exhibit list after successful update
            } catch (error) {
                console.error("Failed to update exhibit:", error);
            }
        },
        [handleUpdateExhibit, id, navigate]
    );

    // Initialize form handling
    const { data, errors, handleChange, validateForm, onSubmit, setData } = useForm(
        exhibit || initializeExhibit, // Initialize form with fetched exhibit data (or an empty object if not available)
        exhibitSchema, // Schema to validate the form
        handleSubmit // Form submission handler
    );

    // Fetch the exhibit data on mount
    useEffect(() => {
        fetchExhibitById(id); // Fetch exhibit data by ID
    }, [id, fetchExhibitById]);

    // Once the exhibit is fetched, set the form data
    useEffect(() => {
        if (exhibit) {
            setData(normalizeExhibit(exhibit)); // Normalize data to ensure valid defaults
        }
    }, [exhibit, setData]);

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
                    title="Edit Exhibit"
                    submitLabel="Update Exhibit"
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