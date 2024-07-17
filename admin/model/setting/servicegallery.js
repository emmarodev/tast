const { servicegalleryModel } = require("../../core/db/setting/servicegallery");


const admincreateservicegalleryModel = async (data, res) => {
  try {
    const {
        title , media , media_type
    } = data;
    const form = await new servicegalleryModel({
        title , media , media_type
    });
    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdateservicegalleryModel = async (data, res) => {
  try {
    const {
        title , media , media_type ,  servicegalleryid
    } = data;

    const form = await servicegalleryModel.findByIdAndUpdate(servicegalleryid, {
        $set: {
            title , media , media_type
        }
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const admindeleteservicegalleryModel = async (data, res) => {
  try {
    const { servicegalleryid } = data;
    const form = await servicegalleryModel.findByIdAndDelete(servicegalleryid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeleteservicegalleryModel,
  adminupdateservicegalleryModel,
  admincreateservicegalleryModel,
};
