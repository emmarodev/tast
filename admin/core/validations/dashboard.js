const joi = require("joi");

const adminretrievesingleorderValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
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
const adminupdateorderstatusValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    orderid: joi.string().required(),
    status: joi.string().required(),
    pin: joi.string().required(),
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
const adminupdateorderprofitValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    orderid: joi.string().required(),
    profit: joi.number().required(),
    pin: joi.string().required(),
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

const adminupdateordersignatureValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    orderid: joi.string().required(),
    signature: joi.string().required(),
    signature_type: joi.string().required(),
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

//payment
const adminretrievesinglepaymentValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    paymentid: joi.string().required(),
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

//refund
const adminretrievesinglerefundValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    refundid: joi.string().required(),
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

const adminuserdashboardValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    userid: joi.string().required(),
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

const adminretrievedashboardValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    viewperpage: joi.number().required(),
    startdate: joi.string().optional().allow(""),
    enddate: joi.string().optional().allow(""),
    status: joi.boolean().optional().allow(null),
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
const adminorderdashboardValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    viewperpage: joi.number().required(),
    startdate: joi.string().optional().allow(""),
    enddate: joi.string().optional().allow(""),
    status: joi.string().optional().allow(""),
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
const adminpaymentdashboardValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    viewperpage: joi.number().required(),
    startdate: joi.string().optional().allow(""),
    enddate: joi.string().optional().allow(""),
    status: joi.string().optional().allow(""),
    payment_method: joi.string().optional().allow(""),
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
const adminrefunddashboardValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    viewperpage: joi.number().required(),
    startdate: joi.string().optional().allow(""),
    enddate: joi.string().optional().allow(""),
    status: joi.string().optional().allow(""),
    refund_method: joi.string().optional().allow(""),
    bankid: joi.string().optional().allow(""),
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
const adminmonthlypaytrackValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    viewperpage: joi.number().required(),
    startdate: joi.string().optional().allow(""),
    enddate: joi.string().optional().allow(""),
    status: joi.string().optional().allow(""),
    bankid: joi.string().optional().allow(""),
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

const adminupdateuserstatusValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    userid: joi.string().required(),
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

const adminupdatepaymentstatusValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    paymentid: joi.string().required(),
    status: joi.string().required(),
    pin: joi.string().required(),
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

const adminupdaterefundstatusValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    refundid: joi.string().required(),
    status: joi.string().required(),
    pin: joi.string().required(),
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
  adminupdateordersignatureValidation,
  adminupdateorderstatusValidation,
  adminretrievesingleorderValidation,
  adminupdatepaymentstatusValidation,
  adminretrievesinglepaymentValidation,
  adminupdaterefundstatusValidation,
  adminretrievesinglerefundValidation,
  adminuserdashboardValidation,
  adminretrievedashboardValidation,
  adminupdaterefundstatusValidation,
  adminupdatepaymentstatusValidation,
  adminupdateorderprofitValidation,
  adminupdateuserstatusValidation,
  adminorderdashboardValidation,
  adminpaymentdashboardValidation,
  adminrefunddashboardValidation,
  adminmonthlypaytrackValidation,
};
