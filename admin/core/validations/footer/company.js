const joi = require("joi");

const admincreatecompanyValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    note: joi.string().required()
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
const adminupdatecompanyValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    companyid: joi.string().required(),
    note: joi.string().required(),
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
const admindeletecompanyValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    companyid: joi.string().required(),
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
  admincreatecompanyValidation,
 
  admindeletecompanyValidation,   adminupdatecompanyValidation
};
