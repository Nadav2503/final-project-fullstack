import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActionBar from '../../../general/card/CardActionBar';

export default function ReviewActionBar({
    reviewId,
    handleEdit,
    handleDelete,
    handleLike,
    isLiked,
    canEditOrDelete, // Condition to check if edit/delete is allowed
    canLike,         // Condition to check if like is allowed
}) {
    const actions = [];

    // Add edit action if the user is allowed to edit
    if (canEditOrDelete && handleEdit) {
        actions.push({
            onClick: () => handleEdit(reviewId),
            icon: <EditIcon />,
        });
    }

    // Add delete action if the user is allowed to delete
    if (canEditOrDelete && handleDelete) {
        actions.push({
            onClick: () => handleDelete(reviewId),
            icon: <DeleteIcon />,
        });
    }

    // Add like action if the user is allowed to like the review
    if (canLike && handleLike) {
        actions.push({
            onClick: handleLike,
            icon: <FavoriteIcon sx={{ color: isLiked ? "red" : "grey" }} />
        });
    }

    return <CardActionBar actions={actions} />;
}
