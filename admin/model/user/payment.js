const { userorderModel } = require("../../../user/core/db/order");
const { paymentModel } = require("../../../user/core/db/payment");
const {
  paymentstatuslogModel,
} = require("../../../user/core/db/paymentstatuslog");
const { userModel } = require("../../../user/core/db/user");

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

    //update order and user
    if (status == "accepted") {
      const userid = payment.userid
      const orderid = payment.orderid
      const user = await userModel.findById(userid);

      const amount = payment.amount;
      const totalpaid = user.finance.total_paid;
      const totalamount = user.finance.total_amount;
      const totalbalance = totalamount - (totalpaid + amount);
      //update user profile
      await userModel.findByIdAndUpdate(userid, {
        $inc: {
          finance: {
            total_paid: amount,
          },
        },
        $set: {
          finance: {
            money_left: totalbalance,
          },
        },
      });



      //update order
      const order = await userorderModel.findById(orderid)
      const totalorderpayment = order.paid_amount + amount
      const budget = order.budget
      const orderbalance = budget - totalorderpayment
      await userorderModel.findByIdAndUpdate(orderid, {
        $inc: {
          paid_amount: amount,
        },
        $set: {
          balance_amount : orderbalance
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
  adminupdateuserpaymentstatusModel,
  adminretrievesinglepaymentModel,
  adminuserpaymentdashboardModel,
};
