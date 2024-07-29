const {
  adminretrievealluserorderdashboardModel,
  adminretrievesingleuserModel,
  adminretrievealluserdashboardModel,
  adminretrievealluserpaymentdashboardModel,
  adminretrievealluserrefunddashboardModel,
  admindeleteuseraccountModel,
} = require("../../model/user/user.mgn");

const adminretrievealluserdashboardController = async (req, res, next) => {
  try {
    const data = "";
    let trainee = await adminretrievealluserdashboardModel(data, res);
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

const adminretrievesingleuserController = async (req, res, next) => {
  try {
    const { userid } = req.body;
    const data = { userid };

    let trainee = await adminretrievesingleuserModel(data, res);
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

const adminretrievealluserorderdashboardController = async (req, res, next) => {
  try {
    const { userid } = req.body;
    const data = { userid };

    let trainee = await adminretrievealluserorderdashboardModel(data, res);
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
const adminretrievealluserpaymentdashboardController = async (
  req,
  res,
  next
) => {
  try {
    const { userid } = req.body;
    const data = { userid };

    let trainee = await adminretrievealluserpaymentdashboardModel(data, res);
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
const adminretrievealluserrefunddashboardController = async (
  req,
  res,
  next
) => {
  try {
    const { userid } = req.body;
    const data = { userid };

    let trainee = await adminretrievealluserrefunddashboardModel(data, res);
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
const admindeleteuseraccountController = async (req, res, next) => {
  try {
    const { userid } = req.body;
    const data = { userid };

    let trainee = await admindeleteuseraccountModel(data, res);
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

module.exports = {
  adminretrievealluserdashboardController,
  adminretrievealluserorderdashboardController,
  adminretrievesingleuserController,
  adminretrievealluserrefunddashboardController,
  adminretrievealluserpaymentdashboardController,
  admindeleteuseraccountController,
};
