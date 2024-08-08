const { userorderModel } = require("../core/db/order");
const { userModel } = require("../core/db/user");

const usercreateorderModel = async (data, res) => {
  try {
    const {
      userid,
      work_location,
      reference_name,
      pay_currency,
      project_deadline,
      project_type,
      project_requirement,
      project_files,
      signature_type,
      project_details,
      signature,
      budget,
    } = data;
    const form = await new userorderModel({
      userid,
      work_location,
      reference_name,
      pay_currency,
      project_deadline,
      project_type,
      project_requirement,
      project_files,
      project_details,

      budget,
      user_signatory: { signature_type, signature },
    });

    const userDetails = await form.save();

    //update user profile
    await userModel.findByIdAndUpdate(userid, {
      $inc: {
        finance: {
          total_order: 1,
          total_amount: budget,
        },
      },
    });
    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const userorderdashboardModel = async (data, res) => {
  try {
    const { userid, totaldata } = data;
    const userorders = await userorderModel
      .find({ userid })
      .limit(totaldata)
      .sort({ createdAt: -1 });

    const sumuserorders = await userorderModel.find({userid});
    const totalorders = await userorderModel.countDocuments({userid});
    const totalpaidamount = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.paid_amount;
    }, 0);
    const totalbudget = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.budget;
    }, 0);
    const totalmoneyleft = sumuserorders.reduce((accumulator, current) => {
      return accumulator + current.balance_amount;
    }, 0);

    const totalpendingorders = await userorderModel.countDocuments({
      status: "pending", userid
    });
    const totalpaymentorders = await userorderModel.countDocuments({
      status: "payment", userid
    });
    const totalwaitingorders = await userorderModel.countDocuments({
      status: "waiting", userid
    });
    const totalworkingorders = await userorderModel.countDocuments({
      status: "working", userid
    });
    const totalcompletedorders = await userorderModel.countDocuments({
      status: "completed", userid
    });
    const totaldelivredorders = await userorderModel.countDocuments({
      status: "delivred", userid
    });
    const totalcancelledorders = await userorderModel.countDocuments({
      status: "cancelled", userid
    });
    const dashboard = {
      totalorders,
      userorders,
      totalpaidamount,
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
    return error.message;
  }
};

module.exports = {
  userorderdashboardModel,
  usercreateorderModel,
};
