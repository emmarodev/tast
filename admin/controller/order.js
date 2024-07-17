const { orderModel } = require("../core/db/order");
const {
  admincreateorderModel,
  adminupdateorderModel,
  admindeleteorderModel,
} = require("../model/order");

const admincreateorderController = async (req, res, next) => {
  const { photo , title } = req.body;
  try {
    const data = {
    photo , title
    };

    let trainee = await admincreateorderModel(data, res);
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
const adminupdateorderController = async (req, res, next) => {
  const {photo , title , orderid } = req.body;
  try {
    const data = {
     photo , orderid, title
    };

    let trainee = await adminupdateorderModel(data, res);
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

const admindeleteorderController = async (req, res, next) => {
  try {
    const { orderid } = req.body;

    const data = {
      orderid,
    };
    let trainee = await admindeleteorderModel(data, res);
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
const adminretrieveorderController = async (req, res, next) => {
  try {
    let trainee = await orderModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
        message: "signup process successful",
      data : trainee
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};


module.exports = {
  admincreateorderController,
  adminupdateorderController,
  admindeleteorderController,
  adminretrieveorderController,
};
