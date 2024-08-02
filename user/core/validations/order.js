const joi = require("joi");
const { handleError } = require("../utils");

const usercreateorderValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    userid: joi.string().required(),
    work_location: joi.string().required(),
    reference_name: joi.string().required(),
    pay_currency: joi.string().required(),
    project_deadline: joi.string().required(),
    project_type: joi.string().required(),
    project_requirement: joi.string().required(),
    project_files: joi.array().required(),
    project_details: joi.string().required(),
    signature_type: joi.string().required(),
    signature: joi.string().required(),
    budget: joi.number().required(),
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

const usercreaterefundValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    userid: joi.string().required(),
    bank_name: joi.string().required(),
    account_name: joi.string().required(),
    currency: joi.string().required(),
    account_number: joi.string().required(),
    routing_number: joi.string().required(),
    code: joi.string().required(),
    transaction_receipt: joi.string().required(),
    reason: joi.string().required(),
    additional_note: joi.string().required(),
    amount: joi.number().required(),
    bank_wallet: joi.string().required(),
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

const usercreatepaymentValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    userid: joi.string().required(),
    bankid: joi.string().required(),
    bank_name: joi.string().required(),
    bank_number: joi.string().required(),
    account_name: joi.string().required(),
    account_number: joi.string().required(),
    transaction_id: joi.string().required(),
    transaction_receipt: joi.string().required(),
    additional_note: joi.string().required(),
    amount: joi.number().required(),
    bank_wallet: joi.string().required(),
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

const userorderdashboardValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    userid: joi.string().required(),
    // totaldata: joi.string().required(),
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
const usersingleorderValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    userid: joi.string().required(),
    orderid: joi.string().required(),
    // totaldata: joi.string().required(),
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

const userretrievesinglepaymentValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    userid: joi.string().required(),
    paymentid: joi.string().required(),
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

const userretrievesinglerefundValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    userid: joi.string().required(),
    refundid: joi.string().required(),
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
  userorderdashboardValidation,
  usercreateorderValidation,
  usercreaterefundValidation,
  usercreatepaymentValidation,
  userretrievesinglerefundValidation,
  userretrievesinglepaymentValidation,usersingleorderValidation
};
