import * as joi from 'joi';

const schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(50).required()
});

export default schema;