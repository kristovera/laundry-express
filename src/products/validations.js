const { textField, numberField } = require("../utils/fields");
const { validationMiddleware } = require("../utils/middlewares");

const productValidationCreate = validationMiddleware([
  textField("name"),
  numberField("price"),
  numberField("stock"),
]);

const productValidationUpdate = validationMiddleware([
  textField("name"),
  numberField("price", true),
  numberField("stock", true),
]);

const productValidationDelete = validationMiddleware([
  textField("name"),

]);
module.exports = {
  productValidationCreate,
  productValidationUpdate,
  productValidationDelete,
};
