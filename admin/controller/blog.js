const { blogModel } = require("../core/db/blog");
const {
  admincreateblogModel,
  adminupdateblogModel,
  admindeleteblogModel,
} = require("../model/blog");

const admincreateblogController = async (req, res, next) => {
  const { description, title, photo, tag } = req.body;
  try {
    const data = {
      description,
      title,
      photo,
      tag,
    };

    let trainee = await admincreateblogModel(data, res);
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
const adminupdateblogController = async (req, res, next) => {
  const { description, title, photo, tag, blogid } = req.body;
  try {
    const data = {
      description,
      title,
      photo,
      tag,
      blogid,
    };

    let trainee = await adminupdateblogModel(data, res);
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

const admindeleteblogController = async (req, res, next) => {
  try {
    const { blogid } = req.body;

    const data = {
      blogid,
    };
    let trainee = await admindeleteblogModel(data, res);
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
const adminretrieveblogController = async (req, res, next) => {
  try {
    let trainee = await blogModel.find();
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
  admincreateblogController,
  adminupdateblogController,
  admindeleteblogController,
  adminretrieveblogController,
};
