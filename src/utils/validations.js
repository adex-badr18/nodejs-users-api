import Joi from "joi";

export const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        age: Joi.number().integer().min(15).max(120).optional(),
    });

    return schema.validate(user);
};
