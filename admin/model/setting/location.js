const { locationModel } = require("../../core/db/setting/location");


const admincreatelocationModel = async (data, res) => {
  try {
    const {
      
        title , image , tag , description
    } = data;
    const form = await new locationModel({
        title , image , tag , description
    });
    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatelocationModel = async (data, res) => {
  try {
    const {
        title , image , tag , locationid , description
    } = data;

    const form = await locationModel.findByIdAndUpdate(locationid, {
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

const admindeletelocationModel = async (data, res) => {
  try {
    const { locationid } = data;
    const form = await locationModel.findByIdAndDelete(locationid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeletelocationModel,
  adminupdatelocationModel,
  admincreatelocationModel,
};
