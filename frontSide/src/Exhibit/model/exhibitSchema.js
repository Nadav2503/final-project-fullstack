import Joi from "joi";

// This schema is used to validate the input for creating or updating an exhibit.
const exhibitSchema = {
    name: Joi.string()
        .min(3)
        .max(256)
        .required()
        .messages({
            "string.base": `"name" should be a string.`,
            "string.empty": `"name" cannot be an empty string.`,
            "string.min": `"name" should have a minimum length of {#limit}.`,
            "string.max": `"name" should have a maximum length of {#limit}.`,
            "any.required": `"name" is a required field.`
        }), // Name: should be a string, required, with a min of 3 characters and max of 256 characters

    description: Joi.string()
        .min(10)
        .max(1024)
        .required()
        .messages({
            "string.base": `"description" should be a string.`,
            "string.empty": `"description" cannot be an empty string.`,
            "string.min": `"description" should have a minimum length of {#limit}.`,
            "string.max": `"description" should have a maximum length of {#limit}.`,
            "any.required": `"description" is a required field.`
        }), // Description: should be a string, required, with a min of 10 characters and max of 1024 characters

    location: Joi.string()
        .valid('Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica')
        .required()
        .messages({
            "string.base": `"location" should be a string.`,
            "string.empty": `"location" cannot be an empty string.`,
            "any.only": `"location" must be one of the following: 'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica'.`,
            "any.required": `"location" is a required field.`
        }), // Location: should be one of the predefined geographic regions

    animals: Joi.array()
        .items(Joi.string().required())
        .default([])
        .messages({
            "array.base": `"animals" should be an array.`,
            "array.items": `"animals" should be an array of strings representing animal IDs.`,
        }), // Animals: an array of animal IDs, can be empty but not null

    status: Joi.string()
        .valid('open', 'closed', 'under maintenance')
        .required()
        .messages({
            "string.base": `"status" should be a string.`,
            "string.empty": `"status" cannot be an empty string.`,
            "any.only": `"status" must be one of the following: 'open', 'closed', 'under maintenance'.`,
            "any.required": `"status" is a required field.`
        }), // Status: should be one of the predefined status values ("open", "closed", or "under maintenance")

    capacity: Joi.number()
        .min(0)
        .max(100)
        .required()
        .messages({
            "number.base": `"capacity" should be a number.`,
            "number.min": `"capacity" should not be less than {#limit}.`,
            "number.max": `"capacity" should not exceed {#limit}.`,
            "any.required": `"capacity" is a required field.`
        }) // Capacity: should be a number, with a min value of 0 and max value of 100
};

export default exhibitSchema;