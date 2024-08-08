const { userorderModel } = require("../core/db/order");
const { paymentModel } = require("../core/db/payment");
const { refundModel } = require("../core/db/refund");
const {
  usercreaterefundModel,
  userpaymentdashboardModel,
  usercreatepaymentModel,
  userrefunddashboardModel,
} = require("../model/refund_payment");

const usercreatepaymentcontroller = async (req, res, next) => {
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
  } = req.body;
  try {
    // const order = await userorderModel.findById(orderid);
    // if (order.status != "payment") {
    //   return res.status(200).json({
    //     status_code: 200,
    //     status: true,
    //     message: "order not due for payment",
    //   });
    // }
    const data = {
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
    };

    let trainee = await usercreatepaymentModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const userpaymentdashboardController = async (req, res, next) => {
  const { userid, } = req.params;
  try {
    const data = {
      userid
    
    };

    let trainee = await userpaymentdashboardModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const userretrievesinglepaymentController = async (req, res, next) => {
  const { userid, paymentid } = req.params;
  try {
    let trainee = await paymentModel.findById(paymentid).populate({
      path: "orderid",
    });

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const usercreaterefundcontroller = async (req, res, next) => {
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
    orderid, currency
  } = req.body;
  try {
    // const order = await userorderModel.findById(orderid);
    // if (order.status == "working") {
    //   return res.status(200).json({
    //     status_code: 200,
    //     status: true,
    //     message: "refund not possible, work in progress",
    //   });
    // }
    const data = {
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
      orderid, currency
    };

    let trainee = await usercreaterefundModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const userrefunddashboardController = async (req, res, next) => {
  const { userid } = req.params;
  try {
    const data = {
      userid,
    };

    let trainee = await userrefunddashboardModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const userretrievesinglerefundController = async (req, res, next) => {
  const { userid, refundid } = req.params;
  try {
    let trainee = await refundModel.findById(refundid).populate({
      path: "orderid",
    });

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
    userpaymentdashboardController,
    usercreatepaymentcontroller,
    userrefunddashboardController,
    usercreaterefundcontroller,
    userretrievesinglerefundController,
    userretrievesinglepaymentController,
  
}
 