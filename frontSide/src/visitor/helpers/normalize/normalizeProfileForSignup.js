const normalizeProfileForSignup = (profileData) => ({
    name: {
        first: profileData.first,
        middle: profileData.middle || "",
        last: profileData.last,
    },
    username: profileData.username,
    password: profileData.password,
    email: profileData.email,
    phone: profileData.phone || "",
    image: {
        url: profileData.imageUrl || "/images/placeholderVisitorPicture.png",
        alt: profileData.imageAlt || "Default visitor image",
    },
    membershipTier: profileData.membershipTier || "Tier 1 - Explorer",
});


export default normalizeProfileForSignup;