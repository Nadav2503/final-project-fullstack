// Router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routerModel"; // Centralized routing constants

import Home from "../pages/HomePage"; // Home page component
import About from "../pages/AboutPage"; // About page component
import Error from "../pages/ErrorPage"; // 404 Error page component
import ExhibitListPage from "../Exhibit/pages/ExhibitListPage"; // All exhibits page
import ExhibitDetailsPage from "../Exhibit/pages/ExhibitDetailsPage"; // Specific exhibit page
import AddExhibitPage from "../Exhibit/pages/AddExhibitPage"; // Add new exhibit page
import EditExhibitPage from "../Exhibit/pages/EditExhibitPage"; // Edit an exhibit page
import AnimalDetailsPage from "../animal/pages/AnimalDetailsPage";
import EditAnimalPage from "../animal/pages/EditAnimalPage";
import AddAnimalPage from "../animal/pages/AddAnimalPage";
import LoginPage from "../visitor/pages/LoginPage";
import SignupPage from "../visitor/pages/SignupPage";
import ProfilePage from "../visitor/pages/ProfilePage";
import EditProfilePage from "../visitor/pages/EditProfilePage";
import EditReviewPage from "../review/pages/EditReviewPage";
import AddReviewPage from "../review/pages/AddReviewPage";
import AdminRMCPage from "../visitor/pages/AdminRMCPage";
import MapPage from "../pages/MapPage";

// Main Router component to define application routes
export default function Router() {
    return (
        <Routes>
            {/* Route for the homepage */}
            <Route path={ROUTES.ROOT} element={<Home />} />
            <Route path={ROUTES.ADMIN} element={<AdminRMCPage />} />
            <Route path={ROUTES.MAP} element={<MapPage />} />

            {/* Route for the About page */}
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={`${ROUTES.EDIT_PROFILE}/:id`} element={<EditProfilePage />} />

            {/* Route for the exhibits page */}
            <Route path={ROUTES.EXHIBITS} element={<ExhibitListPage />} />

            {/* Route for adding a new exhibit */}
            <Route path={ROUTES.ADD_EXHIBIT} element={<AddExhibitPage />} />
            <Route path={ROUTES.ADD_ANIMAL} element={<AddAnimalPage />} />
            <Route path={ROUTES.ADD_REVIEW} element={<AddReviewPage />} />

            {/* Route for editing an exhibit */}
            <Route path={`${ROUTES.EDIT_EXHIBIT}/:id`} element={<EditExhibitPage />} />
            <Route path={`${ROUTES.EDIT_ANIMAL}/:id`} element={<EditAnimalPage />} />
            <Route path={`${ROUTES.EDIT_REVIEW}/:reviewId`} element={<EditReviewPage />} />

            {/* Route for a specific exhibit details page */}
            <Route path={`${ROUTES.EXHIBIT_INFO}/:exhibitId`} element={<ExhibitDetailsPage />} />
            <Route path={`${ROUTES.ANIMAL_INFO}/:animalId`} element={<AnimalDetailsPage />} />

            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            {/* Fallback route for non-existent paths */}
            <Route path={ROUTES.ERROR} element={<Error />} />
        </Routes>
    );
}
