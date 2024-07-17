const { fourcardModel } = require("../../core/db/setting/fourcard");
const {
  adminupdatefourcardModel,
  admindeletefourcardModel,
  admincreatefourcardModel,
} = require("../../model/setting/fourcard");

const admincreatefourcardController = async (req, res, next) => {
  const { title, image, tag, description } = req.body;
  try {
    const fourcard = await fourcardModel.find();
    if (fourcard.length > 4) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "fourcard already in system",
      });
    }
    const data = {
      title,
      image,
      tag,
      description,
    };

    let trainee = await admincreatefourcardModel(data, res);
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
const adminupdatefourcardController = async (req, res, next) => {
  const { title, image, tag, description, fourcardid } = req.body;
  try {
    const data = {
      title,
      image,
      tag,
      description,
      fourcardid,
    };

    let trainee = await adminupdatefourcardModel(data, res);
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

const admindeletefourcardController = async (req, res, next) => {
  try {
    const { fourcardid } = req.body;

    const data = {
      fourcardid,
    };
    let trainee = await admindeletefourcardModel(data, res);
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
const adminretrievefourcardController = async (req, res, next) => {
  try {
    let trainee = await fourcardModel.findOne();
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
  admincreatefourcardController,
  adminupdatefourcardController,
  admindeletefourcardController,
  adminretrievefourcardController,
};
