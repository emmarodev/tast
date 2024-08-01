const { locationModel } = require("../../core/db/setting/location");
const {
  adminupdatelocationModel,
  admindeletelocationModel,
  admincreatelocationModel,
} = require("../../model/setting/location");

const admincreatelocationController = async (req, res, next) => {
  const { contact , flag , address , name } = req.body;
  try {
    const data = {
     contact , flag , address , name
    };

    let trainee = await admincreatelocationModel(data, res);
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
const adminupdatelocationController = async (req, res, next) => {
  const { contact , flag , address , name, locationid } = req.body;
  try {
    const data = {
     contact , flag , address , name ,
      locationid,
    };

    let trainee = await adminupdatelocationModel(data, res);
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

const admindeletelocationController = async (req, res, next) => {
  try {
    const { locationid } = req.body;

    const data = {
      locationid,
    };
    let trainee = await admindeletelocationModel(data, res);
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
const adminretrievelocationController = async (req, res, next) => {
  try {
    let trainee = await locationModel.find();
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
  admincreatelocationController,
  adminupdatelocationController,
  admindeletelocationController,
  adminretrievelocationController,
};
