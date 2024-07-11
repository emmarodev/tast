const { bankModel } = require("../core/db/bank");
const {
  admincreatebankModel,
  adminupdatebankModel,
  admindeletebankModel,
  adminchangebankstatusModel,
} = require("../model/bank");

const admincreatebankController = async (req, res, next) => {
  const { type, name, qrcode, logo, currency_support, tax_rate, account_info } =
    req.body;
  try {
    const data = {
      type,
      name,
      qrcode,
      logo,
      currency_support,
      tax_rate,
      account_info,
    };

    let trainee = await admincreatebankModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};
const adminupdatebankController = async (req, res, next) => {
  const {
    type,
    name,
    qrcode,
    logo,
    currency_support,
    tax_rate,
    account_info,
    bankid,
  } = req.body;
  try {
    const data = {
      type,
      name,
      qrcode,
      logo,
      currency_support,
      tax_rate,
      account_info,
      bankid,
    };

    let trainee = await adminupdatebankModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};

const admindeletebankController = async (req, res, next) => {
  try {
    const { bankid } = req.body;

    const data = {
      bankid,
    };
    let trainee = await admindeletebankModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrievebankController = async (req, res, next) => {
  try {

    let trainee = await bankModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
        message: "signup process successful",
      data : trainee
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrieveallbankController = async (req, res, next) => {
  try {
    let banks = await bankModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: banks,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const adminchangebankstatusController = async (req, res, next) => {
    try {
      const { bankid , status} = req.body;
      const bank = await bankModel.findById(bankid);
      if (!bank) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "admin does  not exist",
        });
      }
      const data = {
        bankid, status
      };
      let trainee = await adminchangebankstatusModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
module.exports = {
  admincreatebankController,
  adminupdatebankController,
  admindeletebankController,
  adminretrieveallbankController,   adminretrievebankController , adminchangebankstatusController
};
