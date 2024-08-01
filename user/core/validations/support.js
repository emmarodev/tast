const joi = require("joi");
const { handleError } = require("../utils");

const usersubscribeValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    email: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const usercontactusValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    email: joi.string().required(),
    message: joi.string().required(),
    subject: joi.string().required(),
    name: joi.string().required(),
    userid: joi.string().optional().allow(""),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

module.exports = {
  usercontactusValidation,
  usersubscribeValidation,
};
