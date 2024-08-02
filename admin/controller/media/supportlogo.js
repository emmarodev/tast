// const { supportlogoModel } = require("../core/db/media/supportlogo");


const { supportlogoModel } = require("../../core/db/media/supportlogo");
const { admincreatesupportlogoModel  ,    adminupdatesupportlogoModel,
    admindeletesupportlogoModel,} = require("../../model/media/supportlogo");

const admincreatesupportlogoController = async (req, res, next) => {
  const { logo } = req.body;
  try {
    const data = {
    logo
    };

    let trainee = await admincreatesupportlogoModel(data, res);
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
const adminupdatesupportlogoController = async (req, res, next) => {
  const {logo , supportlogoid } = req.body;
  try {
    const data = {
     logo , supportlogoid,
    };

    let trainee = await adminupdatesupportlogoModel(data, res);
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

const admindeletesupportlogoController = async (req, res, next) => {
  try {
    const { supportlogoid } = req.body;

    const data = {
      supportlogoid,
    };
    let trainee = await admindeletesupportlogoModel(data, res);
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
const adminretrievesupportlogoController = async (req, res, next) => {
  try {
    let trainee = await supportlogoModel.find();
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
  admincreatesupportlogoController,
  adminupdatesupportlogoController,
  admindeletesupportlogoController,
  adminretrievesupportlogoController,
};
