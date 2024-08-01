const { userorderModel } = require("../../../user/core/db/order");
const { orderstatuslogModel } = require("../../../user/core/db/orderstatuslog");
const { userModel } = require("../../../user/core/db/user");

const adminuserorderdashboardModel = async (data, res) => {
  try {
    const totalorders = await userorderModel.find();
    const dashboard = { totalorders };

    return dashboard;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminretrievesingleuserorderModel = async (data, res) => {
  try {
    const { orderid } = data;
    const order = await userorderModel.findById(orderid);
    const statuslog = await orderstatuslogModel.find(orderid);
    const orderdata = { order, statuslog };

    return orderdata;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminupdateuserorderstatusModel = async (data, res) => {
  try {
    const { orderid, adminid, status } = data;

    const order = await userorderModel.findById(orderid);
    const from = order.status;
    const to = status;
    //update order status
    await userorderModel.findByIdAndUpdate(orderid, {
      $set: {
        status,
      },
    });

    //create order status log
    const userorderid = order._id;
    await new orderstatuslogModel({
      to,
      from,
      orderid: userorderid,
      adminid,
    });

    const userDetails = await form.save();
    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminupdateuserordersignatoryModel = async (data, res) => {
  try {
    const { orderid, adminid, signature, signature_type } = data;
    s;
    await userorderModel.findByIdAndUpdate(orderid, {
      $set: {
        admin_signatory: {
          adminid,
          signature,
          signature_type,
        },
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminsetorderprofitModel = async (data, res) => {
  try {
    const { orderid, adminid, profit, pin, userid } = data;
    //update user profile
    await userModel.findByIdAndUpdate(userid, {
      $inc: {
        finance: {
          profit,
        },
      },
    });

    //update user profile
    await userorderModel.findByIdAndUpdate(orderid, {
      $set: {
        profit
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
  adminupdateuserorderstatusModel,
  adminretrievesingleuserorderModel,
  adminuserorderdashboardModel,
  adminupdateuserordersignatoryModel, adminsetorderprofitModel
};
