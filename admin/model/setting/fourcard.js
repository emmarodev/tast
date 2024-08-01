const { fourcardModel } = require("../../core/db/setting/fourcard");


const admincreatefourcardModel = async (data, res) => {
  try {
    const {
      
        title , image , tag , description
    } = data;
    const form = await new fourcardModel({
        title , image , tag , description
    });
    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatefourcardModel = async (data, res) => {
  try {
    const {
        title , image , tag , fourcardid , description
    } = data;

    const form = await fourcardModel.findByIdAndUpdate(fourcardid, {
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

const admindeletefourcardModel = async (data, res) => {
  try {
    const { fourcardid } = data;
    const form = await fourcardModel.findByIdAndDelete(fourcardid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeletefourcardModel,
  adminupdatefourcardModel,
  admincreatefourcardModel,
};
