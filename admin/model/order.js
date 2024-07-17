const { orderModel } = require("../core/db/order");

const admincreateorderModel = async (data, res) => {
  try {
    const {
        photo , title
    } = data;
    const form = await new orderModel({
        photo , title
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdateorderModel = async (data, res) => {
  try {
    const {
         photo , orderid , title
    } = data;

    const form = await orderModel.findByIdAndUpdate(orderid, {
      $set: {
        photo , title
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};


const admindeleteorderModel = async (data, res) => {
  try {
    const { orderid } = data;
    const form = await orderModel.findByIdAndDelete(orderid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admindeleteorderModel,
  admincreateorderModel, adminupdateorderModel
  
};
