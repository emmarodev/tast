const { infotechfooterModel } = require("../../core/db/footer/infotech");
const {
  admincreateinfotechModel,
  adminupdateinfotechModel,
  admindeleteinfotechModel,
} = require("../../model/footer/infotech");

const admincreateinfotechController = async (req, res, next) => {
  const { note } = req.body;
  try {
    const data = {
    note
    };

    let trainee = await admincreateinfotechModel(data, res);
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
const adminupdateinfotechController = async (req, res, next) => {
  const {note , infotechid } = req.body;
  try {
    const data = {
     note , infotechid,
    };

    let trainee = await adminupdateinfotechModel(data, res);
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

const admindeleteinfotechController = async (req, res, next) => {
  try {
    const { infotechid } = req.body;

    const data = {
      infotechid,
    };
    let trainee = await admindeleteinfotechModel(data, res);
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
const adminretrieveinfotechController = async (req, res, next) => {
  try {
    let trainee = await  infotechfooterModel.find();
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
  admincreateinfotechController,
  adminupdateinfotechController,
  admindeleteinfotechController,
  adminretrieveinfotechController,
};
