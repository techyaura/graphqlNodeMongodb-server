const Joi = require('joi');

const addTodoLabelSchema = Joi.object().keys({
  name: Joi.string()
    .regex(/^\S+$/)
    .min(4)
    .max(60)
    .required()
});
const updateTodoLabelSchema = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string()
    .regex(/^\S+$/)
    .min(4)
    .max(30)
    .required()
});
module.exports = {
  addTodoLabelValidator(req) {
    const reqBody = req.body || req;
    return new Promise((resolve, reject) => Joi.validate(reqBody, addTodoLabelSchema, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }));
  },
  updateTodoLabelValidator(req) {
    const reqBody = req.body || req;
    return new Promise((resolve, reject) => Joi.validate(reqBody, updateTodoLabelSchema, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }));
  }
};
