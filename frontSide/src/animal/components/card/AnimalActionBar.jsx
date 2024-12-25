import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActionBar from '../../../general/card/CardActionBar';
import ROUTES from '../../../routers/routerModel';
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate } from 'react-router-dom';

// Component for displaying action buttons for an animal card
export default function AnimalActionBar({
    animalId,
    handleDelete,
    handleEditAnimal,
    handleFavoriteToggle,
    isLiked,
    canEditOrDelete,
    canWriteReview,
    canLike,
    isProfilePage
}) {
    const actions = [];
    const navigate = useNavigate();

    // Add edit action if the user has permission
    if (canEditOrDelete && handleEditAnimal) {
        actions.push({
            onClick: () => handleEditAnimal(animalId),
            icon: <EditIcon />,
        });
    }

    // Add delete action if the user has permission
    if (canEditOrDelete && handleDelete) {
        actions.push({
            onClick: () => handleDelete(animalId),
            icon: <DeleteIcon />,
        });
    }

    // Add like action if the user can like animals
    if (canLike) {
        actions.push({
            onClick: () => handleFavoriteToggle(animalId),
            icon: (
                <FavoriteIcon
                    sx={{
                        color: isLiked ? 'red' : 'gray',
                    }}
                />
            ),
        });
    }

    // Add write review action if the user can write reviews and is not on the profile page
    if (canWriteReview && !isProfilePage) {
        actions.push({
            onClick: () => navigate(`${ROUTES.ADD_REVIEW}?animalId=${animalId}`),
            icon: <CommentIcon />,
        });
    }

    return <CardActionBar actions={actions} />;
}
