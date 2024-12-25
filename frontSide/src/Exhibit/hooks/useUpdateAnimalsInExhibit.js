import { useCallback, useState } from "react";
import { updateAnimalsInExhibit } from "../../services/ExhibitServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

export default function useUpdateAnimalsInExhibit() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleUpdateAnimals = useCallback(
        async (id, { addAnimals = [], removeAnimals = [] }) => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await updateAnimalsInExhibit(id, {
                    addAnimals,
                    removeAnimals,
                });
                // Provide feedback based on actions performed
                if (addAnimals.length > 0) {
                    setSnack("success", `${addAnimals.length} animals added to the exhibit!`);
                }
                if (removeAnimals.length > 0) {
                    setSnack("success", `${removeAnimals.length} animals removed from the exhibit!`);
                }

                return data;
            } catch (err) {
                setError(err.message);
                setSnack("error", err.response?.data || "Failed to update exhibit animals.");
            } finally {
                setIsLoading(false);
            }
        },
        [setSnack]
    );

    return { isLoading, error, handleUpdateAnimals };
}
