const { bannerModel } = require("../../core/db/setting/banner");
const { adminupdatebannerModel, admindeletebannerModel, admincreatebannerModel } = require("../../model/setting/banner");


const admincreatebannerController = async (req, res, next) => {
  const { title , image , tag } =
    req.body;
    try {
        const banner = await bannerModel.find()
        if (banner.length > 1) {
            return res.status(200).json({
                status_code: 200,
                status: true,
                message: "banner already in system",
              });
        }
    const data = {
        title , image , tag
    };

    let trainee = await admincreatebannerModel(data, res);
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
const adminupdatebannerController = async (req, res, next) => {
  const {
    title , image , tag ,
    bannerid,
  } = req.body;
  try {
    const data = {
        title , image , tag ,
        bannerid,
    };

    let trainee = await adminupdatebannerModel(data, res);
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

const admindeletebannerController = async (req, res, next) => {
  try {
    const { bannerid } = req.body;

    const data = {
      bannerid,
    };
    let trainee = await admindeletebannerModel(data, res);
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
const adminretrievebannerController = async (req, res, next) => {
  try {

    let trainee = await bannerModel.find();
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
  admincreatebannerController,
  adminupdatebannerController,
  admindeletebannerController,
    adminretrievebannerController 
};
