const { userModel } = require("../core/db/user");
const { create_user_token } = require("../core/utils");

const userSignupModel = async (data, res) => {
  try {
    const { userEmail, Harshpassword, name, code } = data;
    const form = await new userModel({
      email: userEmail,
      password: Harshpassword,
      name,
    });

    const userDetails = await form.save();
    //update the user code so you can verify him
    const updatecode = await userModel.findByIdAndUpdate(userDetails._id, {
      $set: {
        "auth.auth_code": code,
      },
    });

    return "please check email for code";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const userLoginModel = async (data, res) => {
  try {
    const { userEmail } = data;
    const userDetails = await userModel.findOne({ email: userEmail });
    const token = create_user_token(userDetails._id);
    const userid = userDetails._id;
    const userData = {
      token,
      userDetails,
    };

    return userData;
  } catch (error) {
    return error.message;
  }
};

const userUpdatepasswordModel = async (data, res) => {
  try {
    const { email, Harshpassword } = data;

    const form = await userModel.findOneAndUpdate(
      { email },
      {
        $set: {
          password: Harshpassword,
        },
      }
    );

    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  userSignupModel,
  userLoginModel,
  userUpdatepasswordModel,
};
