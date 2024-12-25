import ROUTES from "../../../routers/routerModel";

export const handleBuyTicketClick = (navigate) => {
    navigate(ROUTES.SIGNUP); // Navigate to the signup page
};

export const handleEnterZooClick = (authStatus, setSnack, navigate) => {
    if (!authStatus) {
        // If the user is not logged in, show a Snackbar message
        setSnack('error', 'You must be logged in to enter the zoo');

        // Delay the navigation to the login page so the user can see the message
        setTimeout(() => {
            navigate(ROUTES.LOGIN); // Navigate to the login page after a brief delay
        }, 3000);
    } else {
        // If logged in, navigate to the map page
        navigate(ROUTES.MAP);
    }
};
