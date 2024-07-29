const { architectureModel } = require("../../admin/core/db/architecture");
const { projectModel } = require("../../admin/core/db/project");
const { serviceModel } = require("../../admin/core/db/service");
const { noticeModel } = require("../../admin/core/db/notice");
const { orderModel } = require("../../admin/core/db/order");
const { employeeModel } = require("../../admin/core/db/employee");
const { blogModel } = require("../../admin/core/db/blog");
const { userhomepageModel } = require("../model/landingpage");
const {
  servicegalleryModel,
} = require("../../admin/core/db/setting/servicegallery");

const userhomepageController = async (req, res, next) => {
  try {
    const data = "";

    let trainee = await userhomepageModel(data, res);

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

const userprojectController = async (req, res, next) => {
  try {
    let trainee = await projectModel.find().sort({ createdAt: -1 });

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
const userarchitectureController = async (req, res, next) => {
  try {
    let trainee = await architectureModel
      .find()
      .limit(8)
      .sort({ createdAt: -1 });
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
const usersinglearchitectureController = async (req, res, next) => {
  try {
    const { architectureid } = req.params;
    let trainee = await architectureModel.findById(architectureid);
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
const userservicesController = async (req, res, next) => {
  try {
    let trainee = await serviceModel.find().sort({ createdAt: -1 });
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
const usersingleserviceController = async (req, res, next) => {
  try {
    const { serviceid } = req.params;
    let trainee = await serviceModel.findById(serviceid);
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
const usernoticeController = async (req, res, next) => {
  try {
    let trainee = await noticeModel.find().sort({ createdAt: -1 });
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
const usersinglenoticeController = async (req, res, next) => {
  try {
    const { noticeid } = req.params;
    let trainee = await noticeModel.findById(noticeid);
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
const userorderController = async (req, res, next) => {
  try {
    let trainee = await orderModel.find().sort({ createdAt: -1 });
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
const usersingleorderController = async (req, res, next) => {
  try {
    const { orderid } = req.params;
    let trainee = await orderModel.findById(orderid);
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
const useremployeeController = async (req, res, next) => {
  try {
    let trainee = await employeeModel.find().sort({ createdAt: -1 });
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
const userblogController = async (req, res, next) => {
  try {
    let trainee = await blogModel.find().sort({ createdAt: -1 });
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
const userservicegalleryController = async (req, res, next) => {
  try {
    let trainee = await servicegalleryModel.find().sort({ createdAt: -1 });
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

const usersingleblogController = async (req, res, next) => {
  try {
    const { blogid } = req.params;
    let trainee = await blogModel.findById(blogid);
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
  userarchitectureController,
  userprojectController,
  userhomepageController,
  usersingleserviceController,
  userservicesController,
  usersinglearchitectureController,
  userorderController,
  usersinglenoticeController,
  usernoticeController,
  userservicegalleryController,
  userblogController,
  usersingleorderController,
  useremployeeController,
  usersingleblogController,
};
