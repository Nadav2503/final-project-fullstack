const ROUTES = {
    ROOT: "/", // Homepage route
    ABOUT: "/about", // About page route
    EXHIBITS: "/exhibits", // All exhibits page route
    EXHIBIT_INFO: "/exhibit-info", // All exhibits page route
    ANIMAL_INFO: "/animal-info", // All animals page route
    ADD_EXHIBIT: "/add-exhibit", // Add new exhibit route
    ADD_ANIMAL: "/add-animal", // Add new animal route
    ADD_REVIEW: "/add-review", // Add new animal route
    EDIT_EXHIBIT: "/edit-exhibit", // Edit exhibit route (without dynamic id here)
    EDIT_REVIEW: "/edit-review", // Edit exhibit route (without dynamic id here)
    EDIT_ANIMAL: "/edit-animal", // Edit animal route (without dynamic id here)
    LOGIN: "/login",
    PROFILE: "/profile",
    EDIT_PROFILE: "/edit-profile",
    SIGNUP: "/signup",
    MAP: "/map",
    ADMIN: "/admin",
    ERROR: "*", // Fallback route for non-existent paths
};

export default ROUTES;
