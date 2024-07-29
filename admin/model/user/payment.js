const { paymentModel } = require("../../../user/core/db/payment");
const { paymentstatuslogModel } = require("../../../user/core/db/paymentstatuslog");

const adminuserpaymentdashboardModel = async (data, res) => {
  try {
    const totalpayment = await paymentModel.find();
    const dashboard = { totalpayment };

    return dashboard;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminretrievesinglepaymentModel = async (data, res) => {
  try {
    const { paymentid } = data;
    const payment = await paymentModel.findById(paymentid);
    const statuslog = await paymentstatuslogModel.find(paymentid);
    const paymentdata = { payment, statuslog };

    return paymentdata;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminupdateuserpaymentstatusModel = async (data, res) => {
  try {
    const { paymentid, adminid, status } = data;

    const payment = await paymentModel.findById(paymentid);
    const from = payment.status;
    const to = status;
    //update payment status
    await paymentModel.findByIdAndUpdate(paymentid, {
      $set: {
        status,
      },
    });

    //create payment status log
    const userpaymentid = payment._id;
    await new paymentstatuslogModel({
      to,
      from,
      paymentid: userpaymentid,
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

module.exports = {
  adminupdateuserpaymentstatusModel,
  adminretrievesinglepaymentModel,
  adminuserpaymentdashboardModel,
};
