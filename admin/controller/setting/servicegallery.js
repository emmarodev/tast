const { servicegalleryModel } = require("../../core/db/setting/servicegallery");
const {
  adminupdateservicegalleryModel,
  admindeleteservicegalleryModel,
  admincreateservicegalleryModel,
} = require("../../model/setting/servicegallery");

const admincreateservicegalleryController = async (req, res, next) => {
  const { title, media, media_type } = req.body;
  try {
    const data = {
      title,
      media,
      media_type,
    };

    let trainee = await admincreateservicegalleryModel(data, res);
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
const adminupdateservicegalleryController = async (req, res, next) => {
  const { title, media, media_type, servicegalleryid } = req.body;
  try {
    const data = {
      title,
      media,
      media_type,
      servicegalleryid,
    };

    let trainee = await adminupdateservicegalleryModel(data, res);
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

const admindeleteservicegalleryController = async (req, res, next) => {
  try {
    const { servicegalleryid } = req.body;

    const data = {
      servicegalleryid,
    };
    let trainee = await admindeleteservicegalleryModel(data, res);
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
const adminretrieveservicegalleryController = async (req, res, next) => {
  try {
    let trainee = await servicegalleryModel.find();
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
  admincreateservicegalleryController,
  adminupdateservicegalleryController,
  admindeleteservicegalleryController,
  adminretrieveservicegalleryController,
};
