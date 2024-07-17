const { noticeModel } = require("../core/db/notice");
const { adminupdatenoticestatusModel } = require("../model/notice");
const {
  admincreatenoticeModel,
  adminupdatenoticeModel,
  admindeletenoticeModel,
} = require("../model/notice");

const admincreatenoticeController = async (req, res, next) => {
  const { title, document, status } = req.body;
  try {
    const data = {
      title,
      document,
      status,
    };

    let trainee = await admincreatenoticeModel(data, res);
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
const adminupdatenoticeController = async (req, res, next) => {
  const { title, document, status, noticeid } = req.body;
  try {
    const data = {
      title,
      document,
      status,
      noticeid,
    };

    let trainee = await adminupdatenoticeModel(data, res);
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
const adminupdatenoticestatusController = async (req, res, next) => {
  const {  status, noticeid } = req.body;
  try {
    const data = {
     
      status,
      noticeid,
    };

    let trainee = await adminupdatenoticestatusModel(data, res);
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

const admindeletenoticeController = async (req, res, next) => {
  try {
    const { noticeid } = req.body;

    const data = {
      noticeid,
    };
    let trainee = await admindeletenoticeModel(data, res);
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
const adminretrievenoticeController = async (req, res, next) => {
  try {
    let trainee = await noticeModel.find();
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
  admincreatenoticeController,
  adminupdatenoticeController,
  admindeletenoticeController,
  adminretrievenoticeController,  adminupdatenoticestatusController
};
