const joi = require("joi");
const { handleError } = require("../utils");

const adminsignupValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    username: joi.string().required(),
    name: joi.string().required(),
    login_url: joi.string().required(),
    pincode: joi.string().required(),
    language: joi.string().required(),
    access: joi.number().required(),
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
const adminloginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
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
const adminupdateprofileValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    email: joi.string().required(),
    adminid: joi.string().required(),
    staffid: joi.string().required(),
    username: joi.string().required(),
    name: joi.string().required(),
    login_url: joi.string().required(),
    pincode: joi.string().required(),
    access: joi.number().required(),
    language: joi.string().required(),
    pincode: joi.string().required(),
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
const admindeletestaffValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    staffid: joi.string().required(),
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
const adminchnagestaffstatusValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    staffid: joi.string().required(),
    status: joi.boolean().required(),
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
const adminupdatepasswordValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    staffid: joi.string().required(),
    newpassword: joi.string().required(),
    currentpassword: joi.string().required(),
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
const adminValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
  });
  const { error } = schema.validate(req.params);
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
  admindeletestaffValidation,
  adminupdateprofileValidation,
  adminloginValidation,
  adminsignupValidation,
  adminupdatepasswordValidation,
  adminValidation,
  adminchnagestaffstatusValidation,
};
