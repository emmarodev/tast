
const { socialModel } = require("../../core/db/media/social");
const { admincreatesocialModel ,    adminupdatesocialModel,
    admindeletesocialModel,} = require("../../model/media/social");

const admincreatesocialController = async (req, res, next) => {
  const { photo , url } = req.body;
  try {
    const data = {
    photo , url
    };

    let trainee = await admincreatesocialModel(data, res);
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
const adminupdatesocialController = async (req, res, next) => {
  const {photo , url , socialid } = req.body;
  try {
    const data = {
     photo , socialid, url
    };

    let trainee = await adminupdatesocialModel(data, res);
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

const admindeletesocialController = async (req, res, next) => {
  try {
    const { socialid } = req.body;

    const data = {
      socialid,
    };
    let trainee = await admindeletesocialModel(data, res);
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
const adminretrievesocialController = async (req, res, next) => {
  try {
    let trainee = await socialModel.find();
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
  admincreatesocialController,
  adminupdatesocialController,
  admindeletesocialController,
  adminretrievesocialController,
};
