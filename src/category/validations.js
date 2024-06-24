const { textField, numberField } = require("../utils/fields");
const { validationMiddleware } = require("../utils/middlewares");

const categoryValidationCreate = validationMiddleware([
  textField("name"),
 
]);

const categoryValidationUpdate = validationMiddleware([
  textField("name"),
]);
const categoryValidationDelete= validationMiddleware([
  textField("name"),
]);




module.exports = {
  categoryValidationCreate,
  categoryValidationUpdate,
  categoryValidationDelete,
};
