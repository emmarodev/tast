const joi = require("joi");

const admincreatesegmentphotoValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    segmentphoto: joi.string().required()
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
const adminupdatesegmentphotoValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    segmentphoto: joi.string().required(),
    segmentphotoid: joi.string().required()
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
const admindeletesegmentphotoValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    segmentphotoid: joi.string().required(),
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
const adminincrementsegmentphotocountValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    segmentphotoid: joi.string().required(),
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
  admincreatesegmentphotoValidation,
  adminincrementsegmentphotocountValidation,
  admindeletesegmentphotoValidation,   adminupdatesegmentphotoValidation
};
