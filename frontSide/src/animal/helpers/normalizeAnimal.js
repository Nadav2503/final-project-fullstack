const normalizeAnimal = (animal) => {

    return {
        name: animal.name,
        type: animal.type,
        gender: animal.gender,
        age: animal.age,
        description: animal.description,
        diet: animal.diet,
        isEndangered: animal.isEndangered,
        healthStatus: animal.healthStatus || "unknown",
        image: {
            url: animal.imageUrl || "/images/placeholderAnimalPicture.webp",
            alt: animal.imageAlt || "default animal image",
        },
    };
};

export default normalizeAnimal;
