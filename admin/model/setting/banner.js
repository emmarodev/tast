const { bannerModel } = require("../../core/db/setting/banner");


const admincreatebannerModel = async (data, res) => {
  try {
    const {
        title , image , tag
    } = data;
    const form = await new bannerModel({
        title , image , tag
    });
    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatebannerModel = async (data, res) => {
  try {
    const {
        title , image , tag , bannerid
    } = data;

    const form = await bannerModel.findByIdAndUpdate(bannerid, {
        $set: {
            title, image, tag
        }
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const admindeletebannerModel = async (data, res) => {
  try {
    const { bannerid } = data;
    const form = await bannerModel.findByIdAndDelete(bannerid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeletebannerModel,
  adminupdatebannerModel,
  admincreatebannerModel,
};
