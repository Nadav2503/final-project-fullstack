import React from "react";
import Exhibits from "./Exhibits";
import Loader from "../../general/Loader";
import Error from "../../general/Error";

export default function ExhibitFeedback({ isLoading, exhibits, error, handleDelete, handleEditExhibit }) {

    if (isLoading) return <Loader />;
    if (error) return <Error errorMessage={error} />;
    if (!exhibits || exhibits.length === 0) return <Error errorMessage="Oops...no exhibits to display" />;

    return (
        <Exhibits
            exhibits={exhibits}
            handleDelete={handleDelete}
            handleEditExhibit={handleEditExhibit}
        />
    );
}