import React from "react";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import Card from "../../../general/card/Card";
import ExhibitHeader from "./ExhibitHeader";
import ExhibitBody from "./ExhibitBody";
import ExhibitActionBar from "./ExhibitActionBar";
import ROUTES from "../../../routers/routerModel";
import { useCurrentVisitor } from "../../../providers/VisitorProvider";
import { canEditOrDelete, canShowActionBar, canWriteReview } from "../../../general/helpers/permission";


export default function ExhibitCard({ exhibit, handleDelete, handleEditExhibit }) {
    const navigate = useNavigate();
    const { visitor } = useCurrentVisitor();

    const handleCardClick = () => {
        navigate(`${ROUTES.EXHIBIT_INFO}/${exhibit._id}`);
    };

    const showActionBar = canShowActionBar(visitor);
    const editOrDeletePermission = canEditOrDelete(visitor, exhibit.visitorId);
    const writeReviewPermission = canWriteReview(visitor);

    return (
        <Card>
            <ExhibitHeader title={exhibit.name} />
            <CardActionArea onClick={handleCardClick}>
                <ExhibitBody
                    description={exhibit.description}
                    capacity={exhibit.capacity}
                    location={exhibit.location}
                    status={exhibit.status}
                />
            </CardActionArea>
            {showActionBar && (
                <ExhibitActionBar
                    exhibitId={exhibit._id}
                    handleDelete={(id) => handleDelete(id, exhibit.animals)}
                    handleEditExhibit={handleEditExhibit}
                    canEditOrDelete={editOrDeletePermission}
                    canWriteReview={writeReviewPermission}
                />
            )}
        </Card>
    );
}
