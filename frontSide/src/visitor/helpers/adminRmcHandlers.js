import { useEffect, useState } from 'react';

// Custom hook for handling screen size and fetching visitors
export const useAdminRmcLogic = (fetchVisitors) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        fetchVisitors(); // Fetch visitors when the component mounts

        // Function to handle screen size changes
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900); // Set the threshold for mobile/tablet
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [fetchVisitors]);

    return { isMobile };
};

// Function to handle deleting a visitor
export const handleDelete = (id, setSelectedVisitorId, setOpenDialog) => {
    setSelectedVisitorId(id); // Set the ID of the visitor to delete
    setOpenDialog(true); // Open the confirmation dialog
};

export const confirmDelete = (selectedVisitorId, handleDeleteVisitor, setVisitors, setOpenDialog) => {
    if (selectedVisitorId) {
        handleDeleteVisitor(selectedVisitorId)
            .then(() => {
                // Remove the deleted visitor from the local state
                setVisitors((prevVisitors) =>
                    prevVisitors.filter((visitor) => visitor._id !== selectedVisitorId)
                );
            })
            .finally(() => {
                setOpenDialog(false); // Close the dialog
            });
    }
};


// Function to cancel deletion (close the dialog)
export const cancelDelete = (setOpenDialog) => {
    setOpenDialog(false); // Close the dialog without doing anything
};
