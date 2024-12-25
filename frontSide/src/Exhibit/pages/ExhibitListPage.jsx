import React from "react";
import { Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";
import ExhibitFeedback from "../components/ExhibitFeedback";
import AddNewButton from "../../general/AddButton";
import ConfirmDialog from "../../general/ConfirmDialog";
import { useExhibitList } from "../hooks/helpersHooks/useExhibitList";

export default function ExhibitListPage() {
    const {
        exhibits,
        isLoading,
        error,
        handleAddExhibit,
        handleDelete,
        handleConfirmDelete,
        handleCancelDelete,
        handleEditExhibit,
        openConfirmDialog,
        canAddExhibit,
        getTitle,
    } = useExhibitList();

    return (
        <Container>
            <PageHeader
                title={getTitle()}
                subtitle="Browse the various exhibits and discover the incredible wildlife that calls our zoo home."
            />

            <ExhibitFeedback
                isLoading={isLoading}
                error={error}
                exhibits={exhibits} // Use filtered exhibits directly
                handleDelete={handleDelete}
                handleEditExhibit={handleEditExhibit}
            />
            {/* Add New Exhibit Button */}
            {canAddExhibit && <AddNewButton onAdd={handleAddExhibit} />}

            {/* Confirmation Dialog for Deleting an Exhibit */}
            <ConfirmDialog
                open={openConfirmDialog}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
                title="Delete Exhibit"
                message="Are you sure you want to delete this exhibit?"
            />
        </Container>
    );
}
