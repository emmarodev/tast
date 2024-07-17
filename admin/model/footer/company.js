// const { civilModel } = require("../core/db/footer/civil");

const { companyfooterModel } = require("../../core/db/footer/company");

const admincreatecompanyModel = async (data, res) => {
  try {
    const {
        note
    } = data;
    const form = await new companyfooterModel({
        note
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatecompanyModel = async (data, res) => {
  try {
    const {
        note , companyid
    } = data;

    const form = await companyfooterModel.findByIdAndUpdate(companyid, {
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

const admindeletecompanyModel = async (data, res) => {
  try {
    const { companyid } = data;
    const form = await companyfooterModel.findByIdAndDelete(companyid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeletecompanyModel,
  admincreatecompanyModel, adminupdatecompanyModel
  
};
