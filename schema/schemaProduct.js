const Joi = require('joi');

const name = Joi.string().alphanum().min(3).max(10);
const price = Joi.number().integer().min(10);
const id = Joi.number().integer();

const schemaCreateProduct = Joi.object({
  name: name.required(),
  price: price.required()
});

const schemaUpdateProduct = Joi.object({
  name: name,
  price: price
});

const schemaGetProduct = Joi.object({
  id: id.required()
});

module.exports = {
  schemaCreateProduct,
  schemaUpdateProduct,
  schemaGetProduct
}
