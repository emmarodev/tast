const { projectModel } = require("../core/db/project");
const {
  admincreateprojectModel,
  adminupdateprojectModel,
  admindeleteprojectModel,
} = require("../model/project");

const admincreateprojectController = async (req, res, next) => {
  const { description, title, photo, price } = req.body;
  try {
    const data = {
      description,
      title,
      photo,
      price,
    };

    let trainee = await admincreateprojectModel(data, res);
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
const adminupdateprojectController = async (req, res, next) => {
  const { description, title, photo, price, projectid } = req.body;
  try {
    const data = {
      description,
      title,
      photo,
      price,
      projectid,
    };

    let trainee = await adminupdateprojectModel(data, res);
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

const admindeleteprojectController = async (req, res, next) => {
  try {
    const { projectid } = req.body;

    const data = {
      projectid,
    };
    let trainee = await admindeleteprojectModel(data, res);
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
const adminretrieveprojectController = async (req, res, next) => {
  try {
    let trainee = await projectModel.find();
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
  admincreateprojectController,
  adminupdateprojectController,
  admindeleteprojectController,
  adminretrieveprojectController,
};
