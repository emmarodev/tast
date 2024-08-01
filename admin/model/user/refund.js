const { refundModel } = require("../../../user/core/db/refund");
const { refundstatuslogModel } = require("../../../user/core/db/refundstatuslog");
const { userModel } = require("../../../user/core/db/user");

const adminuserrefunddashboardModel = async (data, res) => {
  try {
    const totalrefund = await refundModel.find();
    const dashboard = { totalrefund };

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
    const statuslog = await refundstatuslogModel.find(refundid);
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
      
      if (status == 'accepted') {
          const userid = refund.userid
          const amount = refund.amount
          await userModel.findByIdAndUpdate(userid, {
            $inc: {
              finance: {
                refund_amount: amount,
              },
            }
        
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
