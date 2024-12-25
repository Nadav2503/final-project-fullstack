const normalizeReview = (review, visitorId, isEditing = false) => {
    const normalizedReview = {
        rating: Number(review.rating) || 1, // Ensure rating is a number
        comment: review.comment?.trim() || "", // Ensure empty comment is an empty string, not null
        date: new Date(), // Don't update date when editing
    };

    // Only include visitorId, exhibitId, animalId, and likes if it's not an edit
    if (!isEditing) {
        normalizedReview.visitorId = visitorId; // Ensure visitorId is set for new reviews
        normalizedReview.exhibitId = review.exhibitId; // Default to null if not available
        normalizedReview.animalId = review.animalId; // Default to null if not available
        normalizedReview.likes = review.likes || []; // Default to empty array if not available
    }

    return normalizedReview;
};

export default normalizeReview;
