const { userorderModel } = require("../core/db/order");
const { userModel } = require("../core/db/user");

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
      project_details,
      
      budget, user_signatory : {signature_type , signature}
    });

      const userDetails = await form.save();
      
      //update user profile
      await userModel.findByIdAndUpdate(userid, {
        $inc: {
              finance: {
                total_order : 1 , total_amount : budget
         }
        },
      });
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
