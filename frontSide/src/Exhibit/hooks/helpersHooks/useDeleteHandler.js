import { useState } from "react";

const useDeleteHandler = ({ fetchAnimalsByExhibit, fetchReviews, handleDeleteAnimal, handleUpdateAnimals, handleDeleteReview }) => {
    const [deleteContext, setDeleteContext] = useState({ type: null, id: null });
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

    const confirmDelete = (type, id) => {
        setDeleteContext({ type, id });
        setOpenConfirmDialog(true);
    };

    const handleConfirmDelete = async (exhibitId) => {
        console.log("Delete Context:", deleteContext);
        console.log("Exhibit ID:", exhibitId);
        const { type, id } = deleteContext;

        try {
            if (type === "animal") {
                await handleUpdateAnimals(exhibitId, { removeAnimals: [id] });
                await handleDeleteAnimal(id);
                fetchAnimalsByExhibit(exhibitId);
            } else if (type === "review") {
                await handleDeleteReview(id);
                fetchReviews(exhibitId);
            }
            setOpenConfirmDialog(false);
            setDeleteContext({ type: null, id: null });
        } catch (error) {
            console.error(`Error deleting ${type}:`, error);
        }
    };


    const handleCancelDelete = () => {
        setOpenConfirmDialog(false);
        setDeleteContext({ type: null, id: null });
    };

    return {
        openConfirmDialog,
        deleteContext,
        confirmDelete,
        handleConfirmDelete,
        handleCancelDelete,
    };
};

export default useDeleteHandler;
