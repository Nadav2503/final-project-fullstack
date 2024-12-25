// Map profile data to the form model (only include editable fields)
const mapEditProfileToModel = (profileData) => {
    return {
        first: profileData.name?.first,
        middle: profileData.name?.middle || "", // Default to empty string if middle name is not provided
        last: profileData.name?.last,
        phone: profileData.phone || "", // Default to empty string if phone is not provided
        imageUrl: profileData.image?.url || "", // Default to empty string if no image URL is provided
        imageAlt: profileData.image?.alt || "", // Default to empty string if no image alt text is provided

    };
};

export default mapEditProfileToModel;
