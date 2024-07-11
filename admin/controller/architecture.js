const { architectureModel } = require("../core/db/architecture");
const {
  admincreatearchitectureModel,
  adminupdatearchitectureModel,
  admindeletearchitectureModel,
} = require("../model/architecture");

const admincreatearchitectureController = async (req, res, next) => {
  const { description, title, photo, price } = req.body;
  try {
    const data = {
      description,
      title,
      photo,
      price,
    };

    let trainee = await admincreatearchitectureModel(data, res);
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
const adminupdatearchitectureController = async (req, res, next) => {
  const { description, title, photo, price, architectureid } = req.body;
  try {
    const data = {
      description,
      title,
      photo,
      price,
      architectureid,
    };

    let trainee = await adminupdatearchitectureModel(data, res);
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

const admindeletearchitectureController = async (req, res, next) => {
  try {
    const { architectureid } = req.body;

    const data = {
      architectureid,
    };
    let trainee = await admindeletearchitectureModel(data, res);
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
const adminretrievearchitectureController = async (req, res, next) => {
  try {
    let trainee = await architectureModel.find();
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

module.exports = {
  admincreatearchitectureController,
  adminupdatearchitectureController,
  admindeletearchitectureController,
  adminretrievearchitectureController,
};
