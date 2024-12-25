const Joi = require('joi');

const loginValidate = (loginData) => {
    const loginSchema = Joi.object({
        username_or_email: Joi.string().required(),
        password: Joi.string().required(), // Ensure password is required
    });

    return loginSchema.validate(loginData);
};

module.exports = { loginValidate }