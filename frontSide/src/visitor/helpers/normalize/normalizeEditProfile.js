const normalizeEditProfile = (profileData) => {
    return {
        name: {
            first: profileData.first,
            middle: profileData.middle || "",
            last: profileData.last,
        },
        phone: profileData.phone || "", // Default to empty string if not provided
        image: {
            url: profileData.imageUrl || "", // Default to empty string if no image
            alt: profileData.imageAlt || "", // Default to empty string if no alt text
        },
    };
};

export default normalizeEditProfile;
