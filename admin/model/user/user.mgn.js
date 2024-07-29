const { userorderModel } = require("../../../user/core/db/order");
const { paymentModel } = require("../../../user/core/db/payment");
const { refundModel } = require("../../../user/core/db/refund");
const { userModel } = require("../../../user/core/db/user");

const adminretrievealluserdashboardModel = async (data, res) => {
  try {
    const totaluser = await userModel.find();
    const dashboard = { totaluser };

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
    const user = await userModel.findById(orderid);

    return userorder;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminretrievealluserorderdashboardModel = async (data, res) => {
  try {
    const { userid } = data;
    const totaluserorder = await userorderModel.find({ userid });
    const dashboard = { totaluserorder };

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
    const totaluserpayment = await paymentModel.find({ userid });
    const dashboard = { totaluserpayment };

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
    const totaluserrefund = await refundModel.find({ userid });
    const dashboard = { totaluserorder };

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
  adminretrievealluserrefunddashboardModel
};
