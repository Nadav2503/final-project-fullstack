// Importing React, necessary hooks, MUI utilities, and the Alert and Snackbar components.
import React, { createContext, useContext, useState, useCallback } from "react";
import { Alert, Snackbar, useTheme } from "@mui/material";

// Create a context for Snackbar management.
const SnackbarContext = createContext();

// SnackbarProvider: Provider component for managing Snackbar messages in the app.
export default function SnackbarProvider({ children }) {
    const theme = useTheme(); // Access the current theme (light/dark) and colors.

    // State management for Snackbar visibility and content.
    const [isSnackOpen, setOpenSnack] = useState(false); // Controls Snackbar visibility.
    const [snackColor, setSnackColor] = useState("success"); // Snackbar color (success, error, warning, info).
    const [snackVariant, setSnackVariant] = useState("filled"); // Snackbar style (filled or outlined).
    const [snackMessage, setSnackMessage] = useState(""); // Message to display in the Snackbar.
    const [snackDuration, setSnackDuration] = useState(2500); // Duration the Snackbar will stay visible (in ms).

    // Function to show the Snackbar with a custom message, color, variant, and duration.
    const setSnack = useCallback(
        (color, message, duration = 2500, variant = "filled") => {
            setOpenSnack(true); // Open the Snackbar.
            setSnackColor(color); // Set the color of the Snackbar.
            setSnackVariant(variant); // Set the variant (filled or outlined).
            setSnackMessage(message); // Set the message.
            setSnackDuration(duration); // Set the duration of visibility.
        },
        []
    );

    return (
        <>
            {/* Provide the Snackbar function to the entire app */}
            <SnackbarContext.Provider value={setSnack}>
                {children}
            </SnackbarContext.Provider>

            {/* Snackbar component to show the alert */}
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }} // Positioning of Snackbar on the screen.
                open={isSnackOpen} // Controls whether Snackbar is visible.
                onClose={() => setOpenSnack(false)} // Close the Snackbar when the user interacts.
                autoHideDuration={snackDuration} // Time for the Snackbar to automatically close.
            >
                <Alert
                    severity={snackColor} // Color severity (success, error, warning, info).
                    variant={snackVariant} // Variant (filled or outlined).
                    sx={{
                        backgroundColor:
                            snackVariant === "filled"
                                ? theme.palette[snackColor]?.main || snackColor
                                : "transparent", // Background color based on variant and color.
                        color:
                            snackVariant === "filled"
                                ? theme.palette[snackColor]?.contrastText ||
                                theme.palette.text.primary
                                : theme.palette[snackColor]?.main || snackColor, // Text color.
                        border: snackVariant === "outlined" ? `1px solid ${theme.palette[snackColor]?.main || snackColor}` : "none", // Border for outlined variant.
                    }}
                >
                    {snackMessage} {/* Display the message */}
                </Alert>
            </Snackbar>
        </>
    );
}

// Hook to use the Snackbar, so any component can trigger a Snackbar message.
export const useSnack = () => {
    const context = useContext(SnackbarContext);
    if (!context) throw Error("useSnack must be used within a SnackbarProvider"); // Error if the hook is used outside the provider.
    return context;
};
