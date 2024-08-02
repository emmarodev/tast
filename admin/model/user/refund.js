const { refundModel } = require("../../../user/core/db/refund");
const {
  refundstatuslogModel,
} = require("../../../user/core/db/refundstatuslog");
const { userModel } = require("../../../user/core/db/user");

const adminuserrefunddashboardModel = async (data, res) => {
  try {
    const { viewperpage, query } = data;

    let userrefund;
    let sumuserrefund = await refundModel.find();

    if (query.$and.length >= 1) {
      console.log("good");
      userrefund = await refundModel.find(query).limit(viewperpage);
    } else {
      userrefund = await refundModel.find().limit(viewperpage);
    }
    const totalrefund = await refundModel.countDocuments();

    const sendingrefund = await refundModel.find({
      status: "sending",
    });
    const totalsendingamount = sendingrefund.reduce((accumulator, current) => {
      return accumulator + current.amount;
    }, 0);
    const totalrefundamount = sumuserrefund.reduce((accumulator, current) => {
      return accumulator + current.amount;
    }, 0);

    const totalpendingrefund = await refundModel.countDocuments({
      status: "pending",
    });
    const totalineligiblerefund = await refundModel.countDocuments({
      status: "ineligible",
    });
    const totalsendingrefund = await refundModel.countDocuments({
      status: "sending",
    });
    const dashboard = {
      totalrefund,
      userrefund,
      totalrefundamount,
      totalsendingamount,
      totalsendingrefund,
      totalineligiblerefund,
      totalpendingrefund,
    };

    return dashboard;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminretrievesinglerefundModel = async (data, res) => {
  try {
    const { refundid } = data;
    const refund = await refundModel.findById(refundid);
    const statuslog = await refundstatuslogModel
      .find({ refundid })
      .find({ orderid })
      .populate({ path: "adminid", select: "name" });
    const refunddata = { refund, statuslog };

    return refunddata;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminupdateuserrefundstatusModel = async (data, res) => {
  try {
    const { refundid, adminid, status } = data;

    const refund = await refundModel.findById(refundid);
    const from = refund.status;
    const to = status;
    //update refund status
    await refundModel.findByIdAndUpdate(refundid, {
      $set: {
        status,
      },
    });

    //create refund status log
    const userrefundid = refund._id;
    await new refundstatuslogModel({
      to,
      from,
      refundid: userrefundid,
      adminid,
    });

    const userDetails = await form.save();

    if (status == "accepted") {
      const userid = refund.userid;
      const amount = refund.amount;
      await userModel.findByIdAndUpdate(userid, {
        $inc: {
          "finance.refund_amount": amount,
        },
      });
    }
    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  adminupdateuserrefundstatusModel,
  adminretrievesinglerefundModel,
  adminuserrefunddashboardModel,
};
