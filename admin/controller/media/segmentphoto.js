

const { segmentphotoModel } = require("../../core/db/media/segmentphoto");
const { admincreatesegmentphotoModel ,    adminupdatesegmentphotoModel,
    admindeletesegmentphotoModel, } = require("../../model/media/segmentphoto");

const admincreatesegmentphotoController = async (req, res, next) => {
  const { logo } = req.body;
  try {
    const data = {
    logo
    };

    let trainee = await admincreatesegmentphotoModel(data, res);
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
const adminupdatesegmentphotoController = async (req, res, next) => {
  const {logo , logoid } = req.body;
  try {
    const data = {
     logo , logoid,
    };

    let trainee = await adminupdatesegmentphotoModel(data, res);
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

const admindeletesegmentphotoController = async (req, res, next) => {
  try {
    const { segmentphotoid } = req.body;

    const data = {
      segmentphotoid,
    };
    let trainee = await admindeletesegmentphotoModel(data, res);
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
const adminretrievesegmentphotoController = async (req, res, next) => {
  try {
    let trainee = await segmentphotoModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
        message: "signup process successful",
      data: trainee
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};


module.exports = {
  admincreatesegmentphotoController,
  adminupdatesegmentphotoController,
  admindeletesegmentphotoController,
  adminretrievesegmentphotoController,
};
