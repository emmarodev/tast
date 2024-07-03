const joi = require("joi");
const { handleError } = require("../utils");

const userupdatepersoneldetailsValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    name: joi.string().required(),
    email: joi.string().required(),
    occupation: joi.string().required(),
    language: joi.array().required(),
    dob: joi.string().required(),
    phone: joi.string().required(),
    userid: joi.string().required().length(24),
    identification: joi.string().required(),
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

const userupdateaddressValidation = (req, res, next) => {
  const schema = joi.object({
    state: joi.string().required(),
    country: joi.string().required(),
    city: joi.string().required(),
    postalzone: joi.string().required(),
    userid: joi.string().required().length(24),
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

const userupdatecompanyinfoValidation = (req, res, next) => {
  const schema = joi.object({
    company_name: joi.string().required(),
    phone: joi.string().required(),
    email: joi.string().required(),
    website_url: joi.string().required(),
    userid: joi.string().required().length(24),
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

const userupdatesociallinkValidation = (req, res, next) => {
  const schema = joi.object({
    social_link: joi.array().required(),
    userid: joi.string().required().length(24),
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
  userupdatecompanyinfoValidation,
  userupdateaddressValidation,
  userupdatepersoneldetailsValidation, userupdatesociallinkValidation
};
