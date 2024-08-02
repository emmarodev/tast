const { userorderModel } = require("../../../user/core/db/order");
const { adminModel } = require("../../core/db/admin");
const {
  adminuserorderdashboardModel,
  adminretrievesingleuserorderModel,
  adminupdateuserorderstatusModel,
  adminupdateuserordersignatoryModel,
  adminsetorderprofitModel,
} = require("../../model/user/order");

const adminuserorderdashboardController = async (req, res, next) => {
  try {
    const { status, startdate, enddate, viewperpage } = req.body;
    var query = { $and: [] };

    if (status != '') {
      query.$and.push({ user_blocked: status });
    }
    if (startdate != "") {
      query.$and.push({ createdAt: { $gte: startdate } });
    }
    if (enddate != "") {
      query.$and.push({ createdAt: { $lte: enddate } });
    }
    const data = { query, viewperpage };
    let trainee = await adminuserorderdashboardModel(data, res);
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
const adminretrievesingleuserorderController = async (req, res, next) => {
  try {
    const { orderid } = req.body;
    const data = { orderid };

    let trainee = await adminretrievesingleuserorderModel(data, res);
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

const adminupdateuserorderstatusController = async (req, res, next) => {
  try {
    const { orderid, adminid, status, pin } = req.body;
    const admin = await adminModel.findById(adminid);

    if (admin.pincode != pin) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "wrong admin pin",
      });
    }
    const data = { orderid, adminid, status, pin };

    let trainee = await adminupdateuserorderstatusModel(data, res);
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
const adminupdateuserorderprofitController = async (req, res, next) => {
  try {
    const { orderid, adminid, profit, pin } = req.body;
    const admin = await adminModel.findById(adminid);

    if (admin.pincode != pin) {
      return res.status(400).json({
        status_code: 400,
        status: true,
        message: "wrong admin pin",
      });
    }
    const order = await userorderModel.findById(orderid);
    if (order.profit != 0) {
      return res.status(400).json({
        status_code: 400,
        status: true,
        message: "order profit already set",
      });
    }
    const userid = order.userid;
    const data = { orderid, adminid, profit, pin, userid };

    let trainee = await adminsetorderprofitModel(data, res);
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
const adminupdateuserordersignatoryController = async (req, res, next) => {
  try {
    const { orderid, adminid, signature, signature_type } = req.body;
    const data = { orderid, adminid, signature, signature_type };

    let trainee = await adminupdateuserordersignatoryModel(data, res);
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
  adminupdateuserorderstatusController,
  adminretrievesingleuserorderController,
  adminuserorderdashboardController,
  adminupdateuserordersignatoryController,
  adminupdateuserorderprofitController,
};
