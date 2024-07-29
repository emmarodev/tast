const { userorderModel } = require("../core/db/order");
const {
  usercreateorderModel,
  userorderdashboardModel,
} = require("../model/order");

const usercreateordercontroller = async (req, res, next) => {
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
  } = req.body;
  try {
    const data = {
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
    };

    let trainee = await usercreateorderModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const userorderdashboardController = async (req, res, next) => {
  const { userid } = req.body;
  try {
    const data = {
      userid,
    };

    let trainee = await userorderdashboardModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const userretrievesingleorderController = async (req, res, next) => {
  const { orderid } = req.params;
  try {
    let trainee = await userorderModel.findById(orderid);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  usercreateordercontroller,
  userorderdashboardController,
  userretrievesingleorderController,
};
