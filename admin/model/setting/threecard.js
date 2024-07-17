const { threecardModel } = require("../../core/db/setting/threecard");


const admincreatethreecardModel = async (data, res) => {
  try {
    const {
        title , image , tag , description
    } = data;
    const form = await new threecardModel({
        title , image , tag , description
    });
    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatethreecardModel = async (data, res) => {
  try {
    const {
        title , image , tag , threecardid , description
    } = data;

    const form = await threecardModel.findByIdAndUpdate(threecardid, {
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

const admindeletethreecardModel = async (data, res) => {
  try {
    const { threecardid } = data;
    const form = await threecardModel.findByIdAndDelete(threecardid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeletethreecardModel,
  adminupdatethreecardModel,
  admincreatethreecardModel,
};
