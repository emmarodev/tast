const joi = require("joi");

const admincreatesupportlogoValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    logo: joi.string().required()
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
const adminupdatesupportlogoValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    logo: joi.string().required(),
    supportlogoid: joi.string().required()
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
const admindeletesupportlogoValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    supportlogoid: joi.string().required(),
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
const adminincrementsupportlogocountValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    supportlogoeid: joi.string().required(),
    type: joi.string().required(),
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
  admincreatesupportlogoValidation,
  adminincrementsupportlogocountValidation,
  admindeletesupportlogoValidation,   adminupdatesupportlogoValidation
};
