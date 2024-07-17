const { adminModel } = require("../core/db/admin");
const { create_admin_token } = require("../core/utils");

const adminSignupModel = async (data, res) => {
  try {
    const {
      userEmail,
      Harshpassword,
      password,
      name,
      username,
      language,
      login_url,
      pincode,
      access,
    } = data;
    const form = await new adminModel({
      email: userEmail,
      password,
      gen_password: Harshpassword,
      name,
      username,
      pincode,
      access,
      language,
      login_url,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminLoginModel = async (data, res) => {
  try {
    const { userEmail } = data;
    const userDetails = await adminModel.findOne({ email: userEmail });
    const token = create_admin_token(userDetails._id);
    const adminid = userDetails._id;
    const adminname = userDetails.name;
    const adminemail = userDetails.email;

    const userData = {
      token,
      adminid,
      adminname,
      adminemail,
    };

    return userData;
  } catch (error) {
    return error.message;
  }
};

const adminauthchangepasswordModel = async (data, res) => {
  try {
    const { email, Harshpassword, newpassword } = data;

    const form = await adminModel.findOneAndUpdate(
      { email },
      {
        $set: {
          password: newpassword,
          gen_password: Harshpassword,
        },
      }
    );

    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdateprofileModel = async (data, res) => {
  try {
    const {
      userEmail,
      name,
      username,
      language,
      login_url,
      pincode,
      access,
      staffid,
    } = data;

    const form = await adminModel.findByIdAndUpdate(staffid, {
      $set: {
        email: userEmail,
        name,
        username,
        pincode,
        access,
        language,
        login_url,
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminupdatesuspendModel = async (data, res) => {
  try {
    const { staffid, status } = data;

    const form = await adminModel.findByIdAndUpdate(staffid, {
      $set: {
        admin_blocked: status,
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const admindeletestaffModel = async (data, res) => {
  try {
    const { staffid } = data;
    const form = await AdminModel.findByIdAndDelete(staffid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const adminupdatepasswordModel = async (data, res) => {
  try {
    const { Harshpassword, adminid, staffid, newpassword } = data;

    const form = await adminModel.findByIdAndUpdate(staffid, {
      $set: {
        gen_password: Harshpassword,
        password: newpassword,
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
module.exports = {
  adminSignupModel,
  adminLoginModel,
  adminupdateprofileModel,
  admindeletestaffModel,
  adminupdatesuspendModel,
  adminupdatepasswordModel,
  adminauthchangepasswordModel,
};
