import { celebrate, Joi } from 'celebrate';

export default {
  createPoint: celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().trim().empty().required().messages({
          'string.base': 'Name must be a string.',
          'string.empty': 'Name cannot be empty.',
          'any.required': 'Name is required.',
        }),
        email: Joi.string().trim().empty().required().email().messages({
          'string.base': 'E-mail must be a string.',
          'string.empty': 'E-mail cannot be empty.',
          'string.email': 'E-mail must be a valid e-mail.',
          'any.required': 'E-mail is required.',
        }),
        whatsapp: Joi.number().required().messages({
          'number.base': 'WhatsApp must be a number.',
          'any.required': 'WhatsApp is required.',
        }),
        latitude: Joi.number().required().messages({
          'number.base': 'Latitude must be a number.',
          'any.required': 'Latitude is required.',
        }),
        longitude: Joi.number().required().messages({
          'number.base': 'Longitude must be a number.',
          'any.required': 'Longitude is required.',
        }),
        city: Joi.string().trim().empty().required().messages({
          'string.base': 'City must be a string.',
          'string.empty': 'City cannot be empty.',
          'any.required': 'City is required.',
        }),
        uf: Joi.string().trim().empty().required().min(2).max(2).messages({
          'string.base': 'UF must be a string.',
          'string.empty': 'UF cannot be empty.',
          'string.min': 'UF must be {#limit} characters',
          'string.max': 'UF must be {#limit} characters only',
          'any.required': 'UF is required.',
        }),
        items: Joi.string().trim().empty().required().messages({
          'string.base': 'Items must be a string.',
          'string.empty': 'Items cannot be empty.',
          'any.required': 'Items is required.',
        }),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  showPoint: celebrate({
    params: Joi.object().keys({
      id: Joi.number().required().messages({
        'number.base': 'ID must be a number.',
        'any.required': 'ID is required.',
      }),
    }),
  }),
};
