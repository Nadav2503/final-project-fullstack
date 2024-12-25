import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActionBar from '../../../general/card/CardActionBar';
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate } from 'react-router-dom';

export default function ExhibitActionBar({ exhibitId, handleDelete, handleEditExhibit, canEditOrDelete, canWriteReview }) {
    const actions = [];
    const navigate = useNavigate();



    if (canEditOrDelete) {
        actions.push({
            onClick: () => handleEditExhibit(exhibitId),
            icon: <EditIcon />,
        });
    }
    if (canEditOrDelete) {
        actions.push({
            onClick: () => handleDelete(exhibitId),
            icon: <DeleteIcon />,
        });
    }
    if (canWriteReview) {
        actions.push({
            onClick: () => navigate(`/add-review?exhibitId=${exhibitId}`),
            icon: <CommentIcon />,
        });
    }

    return (
        <CardActionBar
            actions={actions}
        />
    );
}
