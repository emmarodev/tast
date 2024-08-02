const { userorderModel } = require("../../../user/core/db/order");
const { orderstatuslogModel } = require("../../../user/core/db/orderstatuslog");
const { userModel } = require("../../../user/core/db/user");

const adminuserorderdashboardModel = async (data, res) => {
  try {
    const { viewperpage, query } = data;

    let userorders;
    if (query.$and.length >= 1) {
      console.log("good");
      userorders = await userorderModel.find(query).limit(viewperpage);
    } else {
      userorders = await userorderModel.find().limit(viewperpage);
    }
    const sumuserorders = await userorderModel.find().limit();
    const totalorders = await userorderModel.countDocuments();
    const totalamount = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.amount;
    }, 0);
    const totalbudget = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.budget;
    }, 0);
    const totalmoneyleft = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.balance_amount;
    }, 0);

    const totalpendingorders = await userorderModel.countDocuments({
      status: "pending",
    });
    const totalpaymentorders = await userorderModel.countDocuments({
      status: "payment",
    });
    const totalwaitingorders = await userorderModel.countDocuments({
      status: "waiting",
    });
    const totalworkingorders = await userorderModel.countDocuments({
      status: "working",
    });
    const totalcompletedorders = await userorderModel.countDocuments({
      status: "completed",
    });
    const totaldelivredorders = await userorderModel.countDocuments({
      status: "delivred",
    });
    const totalcancelledorders = await userorderModel.countDocuments({
      status: "cancelled",
    });
    const dashboard = {
      totalorders,
      userorders,
      totalamount,
      totalbudget,
      totalmoneyleft,
      totalwaitingorders,
      totalpaymentorders,
      totalpendingorders,
      totaldelivredorders,
      totalcompletedorders,
      totalworkingorders,
      totalcancelledorders,
    };

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
    const statuslog = await orderstatuslogModel
      .find({ orderid })
      .populate({ path: "adminid", select: "name" });
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
    const form = await new orderstatuslogModel({
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
        "finance.profit": profit,
      },
    });

    //update user profile
    await userorderModel.findByIdAndUpdate(orderid, {
      $set: {
        profit,
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
  adminupdateuserordersignatoryModel,
  adminsetorderprofitModel,
};
