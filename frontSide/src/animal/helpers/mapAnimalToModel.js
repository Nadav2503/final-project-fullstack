const mapAnimalToModel = (animal) => {
    return {
        name: animal.name,
        type: animal.type,
        gender: animal.gender,
        age: animal.age,
        description: animal.description,
        diet: animal.diet,
        isEndangered: animal.isEndangered,
        healthStatus: animal.healthStatus || "unknown",
        imageUrl: animal.image?.url || "/images/placeholderAnimalPicture.webp",
        imageAlt: animal.image?.alt || "default animal image",
    };
};

export default mapAnimalToModel;
