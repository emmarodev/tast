const { adminModel } = require("../../core/db/admin");
const {
  adminuserpaymentdashboardModel,
  adminretrievesinglepaymentModel,
  adminupdateuserpaymentstatusModel,
} = require("../../model/user/payment");
const {
  adminuserrefunddashboardModel,
  adminretrievesinglerefundModel,
  adminupdateuserrefundstatusModel,
} = require("../../model/user/refund");

const adminuserpaymentdashboardController = async (req, res, next) => {
  try {
    const { status, startdate, enddate, viewperpage, payment_method } =
      req.body;
    var query = { $and: [] };

    if (status != "") {
      query.$and.push({ status: status });
    }
    if (payment_method != "") {
      query.$and.push({ bank_wallet: payment_method });
    }
    if (startdate != "") {
      query.$and.push({ createdAt: { $gte: startdate } });
    }
    if (enddate != "") {
      query.$and.push({ createdAt: { $lte: enddate } });
    }
    const data = { query, viewperpage };
    let trainee = await adminuserpaymentdashboardModel(data, res);
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
const adminretrievesingleuserpaymentController = async (req, res, next) => {
  try {
    const { paymentid } = req.body;
    const data = { paymentid };

    let trainee = await adminretrievesinglepaymentModel(data, res);
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

const adminupdateuserpaymentstatusController = async (req, res, next) => {
  try {
    const { paymentid, adminid, status, pin } = req.body;
    const admin = await adminModel.findById(adminid);

    if (admin.pincode != pin) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "wrong admin pin",
      });
    }
    const data = { paymentid, adminid, status, pin };

    let trainee = await adminupdateuserpaymentstatusModel(data, res);
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


const adminuserrefunddashboardController = async (req, res, next) => {
  try {
    const { status, startdate, enddate, viewperpage, refund_method , bankid } =
      req.body;
    var query = { $and: [] };

    if (status != "") {
      query.$and.push({ status: status });
    }
    if (refund_method != "") {
      query.$and.push({ bank_wallet: refund_method });
    }
    if (bankid != "") {
      query.$and.push({ bankid: bankid });
    }
    if (startdate != "") {
      query.$and.push({ createdAt: { $gte: startdate } });
    }
    if (enddate != "") {
      query.$and.push({ createdAt: { $lte: enddate } });
    }
    const data = { query, viewperpage };
    let trainee = await adminuserrefunddashboardModel(data, res);
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
const adminretrievesingleuserrefundController = async (req, res, next) => {
  try {
    const { refundid } = req.body;
    const data = { refundid };

    let trainee = await adminretrievesinglerefundModel(data, res);
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

const adminupdateuserrefundstatusController = async (req, res, next) => {
  try {
    const { refundid, adminid, status, pin } = req.body;
    const admin = await adminModel.findById(adminid);

    if (admin.pincode != pin) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "wrong admin pin",
      });
    }
    const data = { refundid, adminid, status, pin };

    let trainee = await adminupdateuserrefundstatusModel(data, res);
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

module.exports = {
  adminupdateuserrefundstatusController,
  adminretrievesingleuserrefundController,
  adminuserrefunddashboardController,
  adminupdateuserpaymentstatusController,
  adminretrievesingleuserpaymentController,
  adminuserpaymentdashboardController,
};
