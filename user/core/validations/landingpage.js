const joi = require("joi");
const { handleError } = require("../utils");

const userblogValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    blogid: joi.string().required(),
  
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
const userorderValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    orderid: joi.string().required(),
  
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
const usernoticeValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    noticeid: joi.string().required(),
  
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
const userserviceValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    serviceid: joi.string().required(),
  
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

const userarchitectureValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    architectureid: joi.string().required(),
  
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
    userarchitectureValidation,
    userblogValidation,
    userserviceValidation,
    usernoticeValidation,
    userorderValidation,
}
