export const makeFirstLetterCapital = (input) => {
    // Check if the input is a non-empty string
    if (typeof input !== "string" || input.length === 0) {
        return input; // If not a string or is empty, return the input as-is
    }

    // Capitalize the first letter and make the rest of the string lowercase
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
};
