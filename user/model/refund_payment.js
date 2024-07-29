const { paymentModel } = require("../core/db/payment");
const { refundModel } = require("../core/db/refund");

const usercreatepaymentModel = async (data, res) => {
  try {
    const {
      additional_note,
      transaction_receipt,
      transaction_id,
      bank_number,
      account_number,
      account_name,
      bankid,
      bank_wallet,
      amount,
      userid,
      orderid,
    } = data;
    const form = await new paymentModel({
      additional_note,
      transaction_receipt,
      transaction_id,
      bank_number,
      account_number,
      account_name,
      bankid,
      bank_wallet,
      amount,
      userid,
      orderid,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const userpaymentdashboardModel = async (data, res) => {
  try {
    const { userid  } = data;
    const userpayments = await paymentModel.find({ userid }).sort({createdAt :-1})
    const userData = {
      userpayments,
    };

    return userData;
  } catch (error) {
    return error.message;
  }
};
const usercreaterefundModel = async (data, res) => {
  try {
    const {
      bank_name,
      account_name,
      account_number,
      routing_number,
      code,
      transaction_receipt,
      reason,
      additional_note,
      amount,
      bank_wallet,
      userid,
      orderid,
    } = data;
    const form = await new refundModel({
      bank_name,
      account_name,
      account_number,
      routing_number,
      code,
      transaction_receipt,
      reason,
      additional_note,
      amount,
      bank_wallet,
      userid,
      orderid,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const userrefunddashboardModel = async (data, res) => {
  try {
    const { userid } = data;
    const userrefunds = await refundModel.find({ userid }).sort({createdAt :-1})
    const userData = {
      userrefunds,
    };

    return userData;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  userpaymentdashboardModel,
  usercreatepaymentModel,
  userrefunddashboardModel,
  usercreaterefundModel,
};