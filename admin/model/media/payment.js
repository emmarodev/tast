// const { paymentModel } = require("../../core/db/media/payment");

const { paymentModel } = require("../../core/db/media/payment");

const admincreatepaymentModel = async (data, res) => {
  try {
    const {
        photo 
    } = data;
    const form = await new paymentModel({
        photo 
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatepaymentModel = async (data, res) => {
  try {
    const {
         photo , paymenticonid 
    } = data;

    const form = await paymentModel.findByIdAndUpdate(paymenticonid, {
      $set: {
        photo 
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};


const admindeletepaymentModel = async (data, res) => {
  try {
    const { paymenticonid } = data;
    const form = await paymentModel.findByIdAndDelete(paymenticonid)

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admindeletepaymentModel,
  admincreatepaymentModel, adminupdatepaymentModel
  
};
