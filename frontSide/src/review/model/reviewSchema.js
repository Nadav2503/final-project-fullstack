import Joi from "joi";

// Review form schema
const reviewSchema = {
    rating: Joi.number()
        .integer()
        .min(1)
        .max(5)
        .required()
        .messages({
            "number.base": "Rating must be a valid number between 1 and 5.",
            "number.min": "Rating must be at least 1.",
            "number.max": "Rating cannot exceed 5.",
            "any.required": "Please provide a rating."
        }), // Rating: Required, integer, 1-5
    comment: Joi.string()
        .min(3)
        .max(1024)
        .trim()
        .optional()
        .messages({
            "string.base": "Comment must be a valid string.",
            "string.min": "Comment must be at least 3 characters long.",
            "string.max": "Comment cannot exceed 1024 characters."
        }), // Comment: Optional, 3-1024 characters
    date: Joi.date()
        .default(() => new Date())
        .optional()
        .messages({
            "date.base": "Date must be a valid date format."
        }), // Date: Optional, defaults to current date
};

export default reviewSchema;
