const joi = require("joi");
const { handleError } = require("../utils");

const userarchitectureviewValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    architectureid: joi.string().required(),
    contain: joi.string().required(),
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

const userblogviewValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    blogid: joi.string().required(),
    contain: joi.string().required(),
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

const userprojectviewValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    projectid: joi.string().required(),
    contain: joi.string().required(),
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
  userarchitectureviewValidation,
  userblogviewValidation,
  userprojectviewValidation,
};
