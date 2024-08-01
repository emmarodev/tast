const { civilfooterModel } = require("../../core/db/footer/civil");
const {
  admincreatecivilModel,
  adminupdatecivilModel,
  admindeletecivilModel,
} = require("../../model/footer/civil");

const admincreatecivilController = async (req, res, next) => {
  const { note } = req.body;
  try {
    const data = {
    note
    };

    let trainee = await admincreatecivilModel(data, res);
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
const adminupdatecivilController = async (req, res, next) => {
  const {note , civilid } = req.body;
  try {
    const data = {
     note , civilid,
    };

    let trainee = await adminupdatecivilModel(data, res);
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

const admindeletecivilController = async (req, res, next) => {
  try {
    const { civilid } = req.body;

    const data = {
      civilid,
    };
    let trainee = await admindeletecivilModel(data, res);
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
const adminretrievecivilController = async (req, res, next) => {
  try {
    let trainee = await  civilfooterModel.find();
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
  admincreatecivilController,
  adminupdatecivilController,
  admindeletecivilController,
  adminretrievecivilController,
};
