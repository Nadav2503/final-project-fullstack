// Function to check if a visitor has permission to edit or delete an item
export const canEditOrDelete = (visitor, itemOwnerId) => {
    return visitor?.isAdmin || visitor?.id === itemOwnerId;
};

// Function to check if a visitor can write a review
export const canWriteReview = (visitor) => {
    return visitor?.membershipTier === 3 || visitor?.membershipTier === 4 || visitor?.isAdmin;
};

// Function to check if a visitor can like an item (Tiers 2, 3, 4, or admin)
export const canLike = (visitor) => {
    return visitor?.membershipTier !== 1 || visitor?.isAdmin;
};

// Function to check if the action bar should be displayed (visitor is Tier 3 or above, or admin)
export const canShowActionBar = (visitor) => {
    return visitor?.membershipTier > 2 || visitor?.isAdmin;
};

// Function to check if the visitor is Tier 1
export const isTier1 = (visitor) => {
    return visitor?.membershipTier === 1;
};

// Function to check if a visitor can add an exhibit
export const canAddExhibit = (visitor) => {
    return visitor?.isAdmin;
};