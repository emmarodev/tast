const { userorderModel } = require("../core/db/order");

const usercreateorderModel = async (data, res) => {
  try {
    const {
      userid,
      work_location,
      reference_name,
      pay_currency,
      project_deadline,
      project_type,
      project_requirement,
      project_files,
      signature_type,
      project_details,
      signature,
      budget,
    } = data;
    const form = await new userorderModel({
      userid,
      work_location,
      reference_name,
      pay_currency,
      project_deadline,
      project_type,
      project_requirement,
      project_files,
      signature_type,
      project_details,
      signature,
      budget,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const userorderdashboardModel = async (data, res) => {
  try {
    const { userid , totaldata} = data;
    const userorders = await userorderModel.find({ userid }).limit(totaldata).sort({createdAt :-1})
    const userData = {
      userorders,
    };

    return userData;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  userorderdashboardModel,
  usercreateorderModel,
};
