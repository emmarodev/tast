// const { paymentModel } = require("../core/db/media/payment");
const { paymentModel } = require("../../core/db/media/payment");
const {
  admincreatepaymentModel,
  adminupdatepaymentModel,
  admindeletepaymentModel,
} = require("../../model/media/payment");

const admincreatepaymentController = async (req, res, next) => {
  const { photo } = req.body;
  try {
    const data = {
      photo,
    };

    let trainee = await admincreatepaymentModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};
const adminupdatepaymentController = async (req, res, next) => {
  const { photo, paymenticonid } = req.body;
  try {
    const data = {
      photo,
      paymenticonid,
    };

    let trainee = await adminupdatepaymentModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};

const admindeletepaymentController = async (req, res, next) => {
  try {
    const { paymenticonid } = req.body;

    const data = {
      paymenticonid,
    };
    let trainee = await admindeletepaymentModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrievepaymentController = async (req, res, next) => {
  try {
    let trainee = await paymentModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  admincreatepaymentController,
  adminupdatepaymentController,
  admindeletepaymentController,
  adminretrievepaymentController,
};
