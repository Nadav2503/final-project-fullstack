import Joi from "joi";

// Profile schema for visitor details
const profileSchema = {
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
    phone: Joi.string()
        .pattern(/^(?:\+972-?5\d{2}-?\d{4}|(?:\+972|0)?50-?\d{7})$/)
        .optional()
        .messages({
            "string.pattern.base": "Please enter a valid phone number format."
        }),
    imageUrl: Joi.string().uri().optional().messages({
        "string.uri": "Please enter a valid image URL."
    }),
    imageAlt: Joi.string().max(256).optional().allow('')
};

export default profileSchema;
