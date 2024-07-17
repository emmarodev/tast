const { adminModel } = require("../core/db/admin");
const { bankModel } = require("../core/db/bank");
const { create_admin_token } = require("../core/utils");

const admincreatebankModel = async (data, res) => {
  try {
    const {
      type,
      name,
      qrcode,
      logo,
      currency_support,
      tax_rate,
      account_info,
    } = data;
    const form = await new bankModel({
      type,
      name,
      qrcode,
      logo,
      currency_support,
      tax_rate,
      account_info,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatebankModel = async (data, res) => {
  try {
    const {
      type,
      name,
      qrcode,
      logo,
      currency_support,
      tax_rate,
      account_info,
      bankid,
    } = data;

    const form = await bankModel.findByIdAndUpdate(bankid, {
      $set: {
        type,
        name,
        qrcode,
        logo,
        currency_support,
        tax_rate,
        account_info,
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const admindeletebankModel = async (data, res) => {
  try {
    const { bankid } = data;
    const form = await bankModel.findByIdAndDelete(bankid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminchangebankstatusModel = async (data, res) => {
  try {
    const { bankid, status } = data;

    const form = await bankModel.findByIdAndUpdate(bankid, {
      $set: {
        bank_active: status,
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admindeletebankModel,
  adminupdatebankModel,
  admincreatebankModel,
  adminchangebankstatusModel,
};
