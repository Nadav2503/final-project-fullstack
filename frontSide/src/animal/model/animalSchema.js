import Joi from "joi";

// The regex ensures that the URL starts with http(s):// or www., followed by a valid domain structure.
const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

// Animal schema definition using Joi validation rules
const animalSchema = {
    // Validates the 'name' field: must be a string, 2-256 characters, trimmed, lowercase, and required.
    name: Joi.string().min(2).max(256).trim().lowercase().required().messages({
        "string.base": "The name must be a valid string.",
        "string.empty": "Name is required. Please enter a name for the animal.",
        "string.min": "The name must be at least 2 characters long.",
        "string.max": "The name cannot be longer than 256 characters.",
        "any.required": "Name is required."
    }),

    // Validates the 'type' field: must be a string, 2-256 characters, trimmed, lowercase, and required.
    type: Joi.string().min(2).max(256).trim().lowercase().required().messages({
        "string.base": "The type must be a valid string.",
        "string.empty": "Type is required. Please specify the animal's type.",
        "string.min": "The type must be at least 2 characters long.",
        "string.max": "The type cannot be longer than 256 characters.",
        "any.required": "Type is required."
    }),

    // Validates the 'gender' field: must be either 'male' or 'female' and required.
    gender: Joi.string().valid('male', 'female').required().messages({
        "string.base": "Gender must be either 'male' or 'female'.",
        "any.only": "Please choose either 'male' or 'female'.",
        "any.required": "Gender is required."
    }),

    // Validates the 'age' field: must be a number and at least 1.
    age: Joi.number().min(1).required().messages({
        "number.base": "Age must be a valid number.",
        "number.min": "Age must be at least 1.",
        "any.required": "Age is required."
    }),

    // Validates the 'description' field: must be a string, 2-256 characters, trimmed, lowercase, and required.
    description: Joi.string().min(2).max(256).trim().lowercase().required().messages({
        "string.base": "The description must be a valid string.",
        "string.empty": "Description is required. Please provide a description of the animal.",
        "string.min": "The description must be at least 2 characters long.",
        "string.max": "The description cannot be longer than 256 characters.",
        "any.required": "Description is required."
    }),

    // Validates the 'diet' field: must be one of 'omnivore', 'carnivore', or 'herbivore', and required.
    diet: Joi.string().valid('omnivore', 'carnivore', 'herbivore').required().messages({
        "string.base": "Diet must be one of the following: 'omnivore', 'carnivore', 'herbivore'.",
        "any.only": "Please select a valid diet: 'omnivore', 'carnivore', or 'herbivore'.",
        "any.required": "Diet is required."
    }),

    // Validates the 'isEndangered' field: must be a boolean value (true or false), and required.
    isEndangered: Joi.boolean().required().messages({
        "boolean.base": "The endangered status must be either true or false.",
        "any.required": "Please specify whether the animal is endangered."
    }),

    // Validates the 'healthStatus' field: must be a string, 2-256 characters, trimmed, lowercase, and required.
    healthStatus: Joi.string().min(2).max(256).trim().lowercase().required().messages({
        "string.base": "Health status must be a valid string.",
        "string.empty": "Health status is required. Please provide the animal's health status.",
        "string.min": "Health status must be at least 2 characters long.",
        "string.max": "Health status cannot be longer than 256 characters.",
        "any.required": "Health status is required."
    }),

    // Validates the 'imageUrl' field: optional field that must be a valid URL if provided.
    imageUrl: Joi.string()
        .trim()
        .lowercase()
        .pattern(urlRegex)  // Matches a valid URL format based on the defined regex.
        .optional()  // Optional field, but if provided, it must be a valid URL.
        .messages({
            "string.base": "The image URL must be a valid string.",
            "string.pattern.base": "Please enter a valid URL (e.g., http://example.com).",
            "string.empty": "Image URL is optional, but if provided, it must be a valid URL.",
        }),

    // Validates the 'imageAlt' field: optional field, must be a string, 2-256 characters, trimmed, lowercase.
    imageAlt: Joi.string().min(2).max(256).trim().lowercase().optional().messages({
        "string.base": "Image alt text must be a valid string.",
        "string.min": "Alt text must be at least 2 characters long.",
        "string.max": "Alt text cannot be longer than 256 characters.",
    }),
};

// Export the schema to be used in validation
export default animalSchema;
