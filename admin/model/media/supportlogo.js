const { supportlogoModel } = require("../../core/db/media/supportlogo");

const admincreatesupportlogoModel = async (data, res) => {
  try {
    const {
        photo
    } = data;
    const form = await new supportlogoModel({
        photo
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatesupportlogoModel = async (data, res) => {
  try {
    const {
         photo , photoid
    } = data;

    const form = await supportlogoModel.findByIdAndUpdate(photoid, {
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

const admindeletesupportlogoModel = async (data, res) => {
  try {
    const { supportlogoid } = data;
    const form = await supportlogoModel.findByIdAndDelete(supportlogoid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admindeletesupportlogoModel,
  admincreatesupportlogoModel, adminupdatesupportlogoModel
  
};
