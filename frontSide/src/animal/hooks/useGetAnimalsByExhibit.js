import { useState, useCallback } from "react";
import { getAnimalsByExhibit } from "../../services/AnimalServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";
import { useCurrentVisitor } from "../../providers/VisitorProvider";
import { getVisitorById } from "../../services/VisitorServiceApi";

const useGetAnimalsByExhibit = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { visitor } = useCurrentVisitor();
    const setSnack = useSnack();

    const fetchAnimalsByExhibit = useCallback(async (exhibitId) => {
        if (!visitor || !visitor._id) {
            setError("Visitor ID is missing.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const fullVisitorData = await getVisitorById(visitor._id);
            const data = await getAnimalsByExhibit(exhibitId);
            const updatedAnimals = data.map(animal => ({
                ...animal,
                isLiked: fullVisitorData.preferredAnimals.includes(animal._id),
            }));

            setAnimals(updatedAnimals);
            setSnack('success', `Successfully fetched animals for exhibit ${exhibitId}!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to fetch animals: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, [visitor, setSnack]);


    return { animals, loading, error, fetchAnimalsByExhibit };
};

export default useGetAnimalsByExhibit;

