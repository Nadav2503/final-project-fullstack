const normalizeExhibit = (exhibit) => {
    return {
        name: exhibit.name,
        description: exhibit.description,
        location: exhibit.location,
        status: exhibit.status || 'open', // Default to 'open' if not provided
        capacity: exhibit.capacity, // Calculate based on animals array length
    };
};

export default normalizeExhibit;