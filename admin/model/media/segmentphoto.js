const { segmentphotoModel } = require("../../core/db/media/segmentphoto");

const admincreatesegmentphotoModel = async (data, res) => {
  try {
    const {
        photo
    } = data;
    const form = await new segmentphotoModel({
        photo
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatesegmentphotoModel = async (data, res) => {
  try {
    const {
         photo , photoid
    } = data;

    const form = await segmentphotoModel.findByIdAndUpdate(photoid, {
      $set: {
        photo 
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const admindeletesegmentphotoModel = async (data, res) => {
  try {
    const { segmentphotoid } = data;
    const form = await segmentphotoModel.findByIdAndDelete(segmentphotoid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admindeletesegmentphotoModel,
  admincreatesegmentphotoModel, adminupdatesegmentphotoModel
  
};
