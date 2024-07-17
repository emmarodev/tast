const { employeeModel } = require("../core/db/employee");
const {
  admincreateemployeeModel,
  adminupdateemployeeModel,
  admindeleteemployeeModel,
} = require("../model/employee");

const admincreateemployeeController = async (req, res, next) => {
  const {  title, photo, name , link } = req.body;
  try {
    const data = {
        title, photo, name , link
    };

    let trainee = await admincreateemployeeModel(data, res);
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
const adminupdateemployeeController = async (req, res, next) => {
  const {  title, photo, name , link , employeeid } = req.body;
  try {
    const data = {
        title, photo, name , link,
      employeeid,
    };

    let trainee = await adminupdateemployeeModel(data, res);
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

const admindeleteemployeeController = async (req, res, next) => {
  try {
    const { employeeid } = req.body;

    const data = {
      employeeid,
    };
    let trainee = await admindeleteemployeeModel(data, res);
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
const adminretrieveemployeeController = async (req, res, next) => {
  try {
    let trainee = await employeeModel.find();
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
  admincreateemployeeController,
  adminupdateemployeeController,
  admindeleteemployeeController,
  adminretrieveemployeeController,
};
