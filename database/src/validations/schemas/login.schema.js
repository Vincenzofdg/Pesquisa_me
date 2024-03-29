const Joi = require('joi');

module.exports = {
    create: Joi.object({
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
    }),
}