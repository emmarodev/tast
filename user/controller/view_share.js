const { orderModel } = require("../../admin/core/db/order");
const {
  userarchitectureviewModel,
  userblogviewModel,
  userprojectviewModel,
} = require("../model/view_share");

const userarchitectureviewController = async (req, res, next) => {
  const { architectureid, contain } = req.body;
  try {
    if (contain != "view" && contain != "share" && contain != "like") {
      console.log("wrong", contain);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "wrong contain info",
      });
    }
    const data = {
      architectureid,
      contain,
    };

    let trainee = await userarchitectureviewModel(data, res);

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
const userprojectviewController = async (req, res, next) => {
  const { projectid, contain } = req.body;
  try {
    if (contain != "view" && contain != "share" && contain != "like") {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "wrong contain info",
      });
    }
    const data = {
      projectid,
      contain,
    };

    let trainee = await userprojectviewModel(data, res);

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

const userblogviewController = async (req, res, next) => {
  const { blogid, contain } = req.body;
  try {
    if (contain != "view" && contain != "share" && contain != "like") {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "wrong contain info",
      });
    }
    const data = {
      blogid,
      contain,
    };

    let trainee = await userblogviewModel(data, res);

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
const usersearchorderController = async (req, res, next) => {
  const { title } = req.body;
  try {
    const ordertitle = title.toLowerCase();

    let trainee = await orderModel.findOne({ title: ordertitle });

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
  userblogviewController,
  userprojectviewController,
  userarchitectureviewController,
  usersearchorderController,
};
