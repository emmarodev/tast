const { companyfooterModel } = require("../../core/db/footer/company");
const {
  admincreatecompanyModel,
  adminupdatecompanyModel,
  admindeletecompanyModel,
} = require("../model/footer/company");

const admincreatecompanyController = async (req, res, next) => {
  const { note } = req.body;
  try {
    const data = {
    note
    };

    let trainee = await admincreatecompanyModel(data, res);
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
const adminupdatecompanyController = async (req, res, next) => {
  const {note , companyid } = req.body;
  try {
    const data = {
     note , companyid,
    };

    let trainee = await adminupdatecompanyModel(data, res);
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

const admindeletecompanyController = async (req, res, next) => {
  try {
    const { companyid } = req.body;

    const data = {
      companyid,
    };
    let trainee = await admindeletecompanyModel(data, res);
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
const adminretrievecompanyController = async (req, res, next) => {
  try {
    let trainee = await  companyfooterModel.find();
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
  admincreatecompanyController,
  adminupdatecompanyController,
  admindeletecompanyController,
  adminretrievecompanyController,
};
