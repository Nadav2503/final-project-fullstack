import React from "react";
import { CardActionArea } from "@mui/material";
import Card from "../../../general/card/Card";
import AnimalHeader from "./AnimalHeader";
import AnimalBody from "./AnimalBody";
import AnimalActionBar from "./AnimalActionBar";
import ROUTES from "../../../routers/routerModel";
import { useLocation, useNavigate } from "react-router-dom";
import { canEditOrDelete, canWriteReview, canLike, isTier1 } from "../../../general/helpers/permission";
import { useCurrentVisitor } from "../../../providers/VisitorProvider";

export default function AnimalCard({
    animal,
    handleDelete,
    handleEditAnimal,
    handleFavoriteToggle,
    isLiked,

}) {
    const { visitor } = useCurrentVisitor();
    const navigate = useNavigate();
    const location = useLocation();
    const handleFavoriteClick = () => {
        handleFavoriteToggle(animal._id);
    };

    const handleCardClick = () => {
        navigate(`${ROUTES.ANIMAL_INFO}/${animal._id}`);
    };

    const editOrDeletePermission = canEditOrDelete(visitor, animal.visitorId);
    const writeReviewPermission = canWriteReview(visitor);
    const likePermission = canLike(visitor);
    const isProfilePage = location.pathname.includes(ROUTES.PROFILE)
    return (
        <Card>
            <AnimalHeader title={animal.name} image={animal.image} />
            <CardActionArea onClick={handleCardClick}>
                <AnimalBody type={animal.type} gender={animal.gender} age={animal.age} />
            </CardActionArea>
            {!isTier1(visitor) && (
                <AnimalActionBar
                    animalId={animal._id}
                    handleDelete={handleDelete} // This is where the confirmDeleteAnimal function is passed
                    handleEditAnimal={handleEditAnimal}
                    handleFavoriteToggle={handleFavoriteClick}
                    isLiked={isLiked}
                    visitor={visitor}
                    canEditOrDelete={editOrDeletePermission}
                    canWriteReview={writeReviewPermission}
                    canLike={likePermission}
                    isProfilePage={isProfilePage}
                />
            )}
        </Card>
    );
}
