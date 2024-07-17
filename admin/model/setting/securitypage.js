const { securitypageModel } = require("../../core/db/setting/securitypage");


const admincreatesecuritypageModel = async (data, res) => {
  try {
    const {
        title , image , tag , description
    } = data;
    const form = await new securitypageModel({
        title , image , tag , description
    });
    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatesecuritypageModel = async (data, res) => {
  try {
    const {
        title , image , tag , securitypageid , description
    } = data;

    const form = await securitypageModel.findByIdAndUpdate(securitypageid, {
        $set: {
            title, image, tag , description
        }
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const admindeletesecuritypageModel = async (data, res) => {
  try {
    const { securitypageid } = data;
    const form = await securitypageModel.findByIdAndDelete(securitypageid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeletesecuritypageModel,
  adminupdatesecuritypageModel,
  admincreatesecuritypageModel,
};
