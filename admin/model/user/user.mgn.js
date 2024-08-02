const { userorderModel } = require("../../../user/core/db/order");
const { paymentModel } = require("../../../user/core/db/payment");
const { refundModel } = require("../../../user/core/db/refund");
const { userModel } = require("../../../user/core/db/user");

const adminretrievealluserdashboardModel = async (data, res) => {
  try {
    const { viewperpage, query } = data;

    let totaluser;
    if (query.$and.length >= 1) {
      totaluser = await userModel.find(query).limit(viewperpage);
    } else {
      totaluser = await userModel.find().limit(viewperpage);
    }

    const totalusers = await userModel.countDocuments();
    const totalactiveusers = await userModel.countDocuments({
      user_blocked: false,
    });
    const totalblockusers = await userModel.countDocuments({
      user_blocked: true,
    });
    const dashboard = {
      totaluser,
      totalusers,
      totalactiveusers,
      totalblockusers,
    };

    return dashboard;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminretrievesingleuserModel = async (data, res) => {
  try {
    const { userid } = data;
    const user = await userModel.findById(userid);

    return user;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminupdateuserstatusModel = async (data, res) => {
  try {
    const { userid, status } = data;
    await userModel.findByIdAndUpdate(userid, {
      $set: {
        user_blocked: status,
      },
    });

    return "sucess";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminretrievealluserorderdashboardModel = async (data, res) => {
  try {
    const { userid } = data;
    const totaluserorder = await userorderModel.countDocuments({ userid });
    const userorders = await userorderModel.find({ userid });
    const totalpendingorders = await userorderModel.countDocuments({
      userid,
      status: "pending",
    });
    const totalwaitingorders = await userorderModel.countDocuments({
      userid,
      status: "waiting",
    });
    const totalworkingorders = await userorderModel.countDocuments({
      userid,
      status: "working",
    });
    const totalcompleteorders = await userorderModel.countDocuments({
      userid,
      status: "complete",
    });
    const totaldeliveredorders = await userorderModel.countDocuments({
      userid,
      status: "delivered",
    });
    const totalcancelorders = await userorderModel.countDocuments({
      userid,
      status: "cancel",
    });

    const sumuserorders = await userorderModel.find({ userid });
    const totalprojectamount = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.amount;
    }, 0);
    const totalmoneyleft = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.balance_amount;
    }, 0);
    const totalorderpayment = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.paid_amount;
    }, 0);
    const dashboard = {
      totaluserorder,
      userorders,
      totalprojectamount,
      totalwaitingorders,
      totalpendingorders,
      totalcancelorders,
      totalworkingorders,
      totalcompleteorders,
      totaldeliveredorders,
      totalorderpayment,
      totalmoneyleft,
      totalprojectamount,
    };

    return dashboard;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminretrievealluserpaymentdashboardModel = async (data, res) => {
  try {
    const { userid } = data;
    const totaluserpayment = await paymentModel.countDocuments({ userid });
    const totalspampayment = await paymentModel.countDocuments({
      userid,
      status: "spam",
    });
    const totalpendingpayment = await paymentModel.countDocuments({
      userid,
      status: "pending",
    });
    const totalacceptedpayment = await paymentModel.countDocuments({
      userid,
      status: "accepted",
    });
    const userpayment = await paymentModel.find({ userid });
    const totalsumpaument = userpayment.reduce((accumulator, current) => {
      return accumulator + current.amount;
    }, 0);
    const dashboard = {
      totaluserpayment,
      totalacceptedpayment,
      totalpendingpayment,
      totalspampayment,
      totalsumpaument,
      userpayment,
    };

    return dashboard;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminretrievealluserrefunddashboardModel = async (data, res) => {
  try {
    const { userid } = data;
    const totaluserrefund = await refundModel.countDocuments({ userid });
    const totalpendingrefund = await refundModel.countDocuments({
      userid,
      status: "pending",
    });
    const totalinelligiblerefund = await refundModel.countDocuments({
      userid,
      status: "inelligible",
    });
    const totalsedningrefund = await refundModel.countDocuments({
      userid,
      status: "sedning",
    });
    const userrefund = await refundModel.find({ userid });
    const totalsumrefund = userrefund.reduce((accumulator, current) => {
      return accumulator + current.amount;
    }, 0);
    const dashboard = {
      totaluserrefund,
      totalsumrefund,
      userrefund,
      totalsedningrefund,
      totalinelligiblerefund,
      totalpendingrefund,
    };

    return dashboard;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const admindeleteuseraccountModel = async (data, res) => {
  try {
    const { userid } = data;
    const totaluserorder = await userModel.findByIdAndDelete(userid);

    return dashboard;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  adminretrievealluserorderdashboardModel,
  adminretrievesingleuserModel,
  adminretrievealluserdashboardModel,
  admindeleteuseraccountModel,
  adminretrievealluserpaymentdashboardModel,
  adminretrievealluserrefunddashboardModel,
  adminupdateuserstatusModel,
};
