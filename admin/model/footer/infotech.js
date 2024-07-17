// const { civilModel } = require("../core/db/footer/civil");

const { infotechfooterModel } = require("../../core/db/footer/infotech");

const admincreateinfotechModel = async (data, res) => {
  try {
    const {
        note
    } = data;
    const form = await new infotechfooterModel({
        note
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdateinfotechModel = async (data, res) => {
  try {
    const {
        note , infotechid
    } = data;

    const form = await infotechfooterModel.findByIdAndUpdate(infotechid, {
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

const admindeleteinfotechModel = async (data, res) => {
  try {
    const { infotechid } = data;
    const form = await infotechfooterModel.findByIdAndDelete(infotechid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeleteinfotechModel,
  admincreateinfotechModel, adminupdateinfotechModel
  
};
