const { threecardModel } = require("../../core/db/setting/threecard");
const {
  adminupdatethreecardModel,
  admindeletethreecardModel,
  admincreatethreecardModel,
} = require("../../model/setting/threecard");

const admincreatethreecardController = async (req, res, next) => {
  const { title, image, tag, description } = req.body;
  try {
    const threecard = await threecardModel.find();
    if (threecard.length > 3) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "threecard already in system",
      });
    }
    const data = {
      title,
      image,
      tag,
      description,
    };

    let trainee = await admincreatethreecardModel(data, res);
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
const adminupdatethreecardController = async (req, res, next) => {
  const { title, image, tag, description, threecardid } = req.body;
  try {
    const data = {
      title,
      image,
      tag,
      description,
      threecardid,
    };

    let trainee = await adminupdatethreecardModel(data, res);
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

const admindeletethreecardController = async (req, res, next) => {
  try {
    const { threecardid } = req.body;

    const data = {
      threecardid,
    };
    let trainee = await admindeletethreecardModel(data, res);
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
const adminretrievethreecardController = async (req, res, next) => {
  try {
    let trainee = await threecardModel.findOne();
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
  admincreatethreecardController,
  adminupdatethreecardController,
  admindeletethreecardController,
  adminretrievethreecardController,
};
