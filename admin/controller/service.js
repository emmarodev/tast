const { serviceModel } = require("../core/db/service");
const {
  admincreateserviceModel,
  adminupdateserviceModel,
  admindeleteserviceModel,
} = require("../model/service");

const admincreateserviceController = async (req, res, next) => {
  const { description, title, photo, tag } = req.body;
  try {
    const data = {
      description,
      title,
      photo,
      tag,
    };

    let trainee = await admincreateserviceModel(data, res);
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
const adminupdateserviceController = async (req, res, next) => {
  const { description, title, photo, tag, serviceid } = req.body;
  try {
    const data = {
      description,
      title,
      photo,
      tag,
      serviceid,
    };

    let trainee = await adminupdateserviceModel(data, res);
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

const admindeleteserviceController = async (req, res, next) => {
  try {
    const { serviceid } = req.body;

    const data = {
      serviceid,
    };
    let trainee = await admindeleteserviceModel(data, res);
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
const adminretrieveserviceController = async (req, res, next) => {
  try {
    let trainee = await serviceModel.find();
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
  admincreateserviceController,
  adminupdateserviceController,
  admindeleteserviceController,
  adminretrieveserviceController,
};
