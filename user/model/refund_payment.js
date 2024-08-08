const { bankModel } = require("../../admin/core/db/bank");
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
      currency,
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
    const { userid } = data;
    const userpayments = await paymentModel
      .find({ userid })
      .sort({ createdAt: -1 });
    const sumuserorders = await paymentModel.find({ userid });
    const totalpayments = await paymentModel.countDocuments({ userid });
    const totalpaidamount = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.amount;
    }, 0);

    const totalpendingpayment = await paymentModel.countDocuments({
      status: "pending",
      userid,
    });
    const totalacceptedpoayment = await paymentModel.countDocuments({
      status: "accepted",
      userid,
    });
    const totalspampayment = await paymentModel.countDocuments({
      status: "spam",
      userid,
    });

    const dashboard = {
      totalspampayment,
      totalacceptedpoayment,
      totalpendingpayment,
      totalpayments,
      userpayments,
    };

    return dashboard;
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
      currency,
    } = data;
    const form = await new refundModel({
      bank_name,
      account_name,
      account_number,
      routing_number,
      code,
      currency,
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
    const userrefunds = await refundModel
      .find({ userid })
      .sort({ createdAt: -1 });
    const sumuserorders = await refundModel.find({ userid });
    const totalrefunds = await refundModel.countDocuments({ userid });
    const totalpaidamount = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.amount;
    }, 0);

    const totalpendingrefund = await refundModel.countDocuments({
      status: "pending",
      userid,
    });
    const totalacceptedpoayment = await refundModel.countDocuments({
      status: "accepted",
      userid,
    });
    const totalspamrefund = await refundModel.countDocuments({
      status: "spam",
      userid,
    });

    const dashboard = {
      totalspamrefund,
      totalacceptedpoayment,
      totalpendingrefund,
      totalrefunds,
      userrefunds,
      totalpaidamount,
    };

    return dashboard;
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
