const { securitypageModel } = require("../../core/db/setting/securitypage");
const {
  adminupdatesecuritypageModel,
  admindeletesecuritypageModel,
  admincreatesecuritypageModel,
} = require("../../model/setting/securitypage");

const admincreatesecuritypageController = async (req, res, next) => {
  const { title, image, tag, description } = req.body;
  try {
    const securitypage = await securitypageModel.find();
    if (securitypage.length > 3) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "securitypage already in system",
      });
    }
    const data = {
      title,
      image,
      tag,
      description,
    };

    let trainee = await admincreatesecuritypageModel(data, res);
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
const adminupdatesecuritypageController = async (req, res, next) => {
  const { title, image, tag, description, securitypageid } = req.body;
  try {
    const data = {
      title,
      image,
      tag,
      description,
      securitypageid,
    };

    let trainee = await adminupdatesecuritypageModel(data, res);
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

const admindeletesecuritypageController = async (req, res, next) => {
  try {
    const { securitypageid } = req.body;

    const data = {
      securitypageid,
    };
    let trainee = await admindeletesecuritypageModel(data, res);
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
const adminretrievesecuritypageController = async (req, res, next) => {
  try {
    let trainee = await securitypageModel.findOne();
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
  admincreatesecuritypageController,
  adminupdatesecuritypageController,
  admindeletesecuritypageController,
  adminretrievesecuritypageController,
};
