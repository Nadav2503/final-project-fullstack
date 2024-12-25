import Joi from "joi";

const passwordPattern = new RegExp(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{4,})(?=.*[!@#$%^&*\-_])[A-Za-z\d!@#$%^&*\-_]{8,}$/
);

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

// Profile schema for visitor details
const signupSchema = {
    username: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Username is required.",
        "string.min": "Username must be at least 3 characters long.",
        "string.max": "Username cannot exceed 30 characters."
    }),
    first: Joi.string().min(1).max(256).required().messages({
        "string.empty": "First name is required.",
        "string.min": "First name cannot be empty.",
        "string.max": "First name cannot exceed 256 characters."
    }),
    middle: Joi.string().min(0).max(256).optional(),
    last: Joi.string().min(1).max(256).required().messages({
        "string.empty": "Last name is required.",
        "string.min": "Last name cannot be empty.",
        "string.max": "Last name cannot exceed 256 characters."
    }),
    email: Joi.string()
        .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .required()
        .messages({
            "string.empty": "Email is required.",
            "string.pattern.base": "Please enter a valid email address."
        }),
    password: Joi.string()
        .pattern(passwordPattern)
        .required()
        .messages({
            "string.pattern.base":
                "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and one of the following special characters: !@#$%^&*-.",
            "any.required": "Password is required."
        }),
    membershipTier: Joi.string()
        .valid("Tier 1 - Explorer", "Tier 2 - Lionheart", "Tier 3 - Jungle King/Queen", "Tier 4 - Safari Leader")
        .default("Tier 1 - Explorer"),
    phone: Joi.string()
        .pattern(/^(?:\+972-?5\d{2}-?\d{4}|(?:\+972|0)?50-?\d{7})$/)
        .allow('')
        .optional()
        .messages({
            "string.pattern.base": "Please enter a valid israeli number format"
        }),
    imageUrl: Joi.string()
        .trim()
        .lowercase()
        .pattern(urlRegex)
        .optional()
        .allow('')
        .messages({
            "string.pattern.base": "Please enter a valid URL (e.g., http://example.com)."
        }),
    imageAlt: Joi.string().max(256).optional().allow('')
};

export default signupSchema;
