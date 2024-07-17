// const { civilModel } = require("../core/db/footer/civil");

const { civilfooterModel } = require("../../core/db/footer/civil");

const admincreatecivilModel = async (data, res) => {
  try {
    const {
        note
    } = data;
    const form = await new civilfooterModel({
        note
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatecivilModel = async (data, res) => {
  try {
    const {
        note , civilid
    } = data;

    const form = await civilfooterModel.findByIdAndUpdate(civilid, {
      $set: {
      note
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const admindeletecivilModel = async (data, res) => {
  try {
    const { civilid } = data;
    const form = await civilfooterModel.findByIdAndDelete(civilid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeletecivilModel,
  admincreatecivilModel, adminupdatecivilModel
  
};
