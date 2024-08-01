const { socialModel } = require("../../core/db/media/social");

const admincreatesocialModel = async (data, res) => {
  try {
    const {
        photo , url
    } = data;
    const form = await new socialModel({
        photo , url
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatesocialModel = async (data, res) => {
  try {
    const {
         photo , url , socialid
    } = data;

    const form = await socialModel.findByIdAndUpdate(socialid, {
      $set: {
        photo , url
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};


const admindeletesocialModel = async (data, res) => {
  try {
    const { socialid } = data;
    const form = await socialModel.findByIdAndDelete(socialid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admindeletesocialModel,
  admincreatesocialModel, adminupdatesocialModel
  
};
