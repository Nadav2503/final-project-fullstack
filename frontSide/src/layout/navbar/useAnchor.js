import { useState } from 'react';

// Custom hook to manage the anchor element for a dropdown or menu.
export default function useAnchor() {
    const [anchorEl, setAnchorEl] = useState(null); // State to track the anchor element.

    // Open menu by setting the clicked element as anchor.
    const handleAnchorClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Close menu by clearing the anchor element.
    const handleAnchorClose = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl, // Current anchor element.
        handleAnchorClick, // Function to set the anchor element.
        handleAnchorClose, // Function to clear the anchor element.
    };
}
