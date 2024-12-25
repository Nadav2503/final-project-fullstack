import { useEffect, useState } from 'react';
import useLikeAnimal from '../../../hooks/useLikeAnimal';

export const useFetchAnimalData = (visitor, fetchAnimalByIdForProfilePage) => {
    const [animalsDetails, setAnimalsDetails] = useState([]);
    const { handleLikeAnimal } = useLikeAnimal(); // Use the handleLikeAnimal function from the custom hook

    useEffect(() => {
        if (visitor && visitor.preferredAnimals) {
            const fetchAnimals = async () => {
                try {
                    const animalDetails = await Promise.all(
                        visitor.preferredAnimals.map(async (animalId) => {
                            const animalData = await fetchAnimalByIdForProfilePage(animalId);
                            return {
                                ...animalData,
                                isLiked: visitor.preferredAnimals.includes(animalId),
                            };
                        })
                    );
                    setAnimalsDetails(animalDetails);
                } catch (err) {
                    console.error("Error fetching animal details:", err);
                }
            };

            fetchAnimals();
        }
    }, [visitor, fetchAnimalByIdForProfilePage]);

    const handleFavoriteToggle = (animalId) => {
        handleLikeAnimal(animalId); // Like or unlike the animal
        setAnimalsDetails((prevAnimals) => {
            // Remove the animal immediately if it's "unliked", otherwise toggle the "liked" status
            return prevAnimals.filter((animal) => animal._id !== animalId);
        });
    };

    return { animalsDetails, handleFavoriteToggle }; // Return both animal details and the toggle function
};
