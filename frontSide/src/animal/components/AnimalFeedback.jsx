import React from "react";
import Animals from "./Animals";
import Loader from "../../general/Loader";
import Error from "../../general/Error";

export default function AnimalFeedback({ isLoading, animals, error, handleDelete, handleEditAnimal, handleFavoriteToggle }) {

    if (isLoading) return <Loader />;
    if (error) return <Error errorMessage={error} />;
    if (!animals || animals.length === 0) return <Error errorMessage="Oops...no animals to display" />;

    return (
        <Animals
            animals={animals}
            handleDelete={handleDelete}
            handleEditAnimal={handleEditAnimal}
            handleFavoriteToggle={handleFavoriteToggle}
        />
    );
}
