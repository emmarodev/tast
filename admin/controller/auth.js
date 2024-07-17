const { adminModel } = require("../core/db/admin");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const {
  adminSignupModel,
  adminLoginModel,
  admindeletestaffModel,
  adminupdatesuspendModel,
  adminupdatepasswordModel,
  adminupdateprofileModel,
  adminauthchangepasswordModel,
} = require("../model/auth");
const { generateRandomNumber } = require("../../user/core/utils");
const { sendEmail } = require("../../helper/email");

const adminSignupController = async (req, res, next) => {
  const {
    username,
    name,
    email,
    password,
    language,
    login_url,
    pincode,
    access,
  } = req.body;
  const userEmail = email.toLowerCase();

  try {
    const people = await adminModel.findOne({ email: userEmail });
    if (people) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "email already exist",
        error: "email already exist",
      });
    }
    //check for pincode
    const pin = await adminModel.findOne({ pincode });
    if (pin) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "pincode already used",
        error: "pincode already used",
      });
    }

    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(password, salt);

    const data = {
      userEmail,
      Harshpassword,
      password,
      name,
      username,
      language,
      login_url,
      pincode,
      access,
    };

    let trainee = await adminSignupModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};

const adminupdateprofileController = async (req, res, next) => {
  const {
    username,
    name,
    email,
    staffid,
    language,
    login_url,
    pincode,
    access,
  } = req.body;
  const userEmail = email.toLowerCase();

  try {
    const data = {
      userEmail,
      name,
      username,
      language,
      login_url,
      pincode,
      access,
      staffid,
    };

    let trainee = await adminupdateprofileModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};

const userLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  const userEmail = email.toLowerCase();
    try {
      

    const userDetails = await adminModel.findOne({
      email: userEmail,
    });
    if (!userDetails) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "user dont exist on our application",
        data: [],
        error: "user dont exist on our application",
      });
    }
    const checkPassword = await bcrypt.compare(
      password,
      userDetails.gen_password
    );
    if (!checkPassword) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect password",
        data: [],
        error: "incorrect password",
      });
    }
    const data = {
      userEmail,
      password,
    };

    let trainee = await adminLoginModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const adminconfirmforgetpasswordcodeController = async (req, res, next) => {
  const { code, email } = req.body;
  const userEmail = email.toLowerCase();
  try {
    const userDetails = await adminModel.findOne({
      email: userEmail,
    });
    const usercode = userDetails.auth.auth_code;
    if (code != usercode) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "wrong code",
      });
    }
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: " successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const adminrNewPasswordLink = async (req, res) => {
  const { email } = req.body;
  const useremail = email.toLowerCase();
  try {
    const client = await adminModel.findOne({ email: useremail });

    if (!client) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect email",
      });
    }
    //function to generate token
    const secret = "userjwt";
    const payload = {
      email: useremail,
      id: client._id,
    };
    const riderid = client._id;
    const token = jwt.sign(payload, secret, { expiresIn: "50m" });
    const code = generateRandomNumber(4);
    //updating the user auth
    const form = await adminModel.findByIdAndUpdate(riderid, {
      $set: {
        auth: { auth_token: token, auth_code: code, auth_verified: true },
      },
    });
    const templateFile = "user.forgotpass.ejs";
    const subject = "Verification email";
    sendEmail(email, subject, templateFile, code);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "mail sent through",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const adminresetPassword = async (req, res, next) => {
  const { email, newpassword } = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(newpassword, salt);
    const data = {
      Harshpassword,
      email,
      newpassword,
    };

    let trainee = await adminauthchangepasswordModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const admindeleteadminController = async (req, res, next) => {
  try {
    const { staffid } = req.body;
    const staff = await adminModel.findById(staffid);
    if (!staff) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "admin does  not exist",
      });
    }
    const data = {
      staffid,
    };
    let trainee = await admindeletestaffModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const suspendadminController = async (req, res, next) => {
  try {
    const { staffid, status } = req.body;
    const staff = await adminModel.findById(staffid);
    if (!staff) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "admin does  not exist",
      });
    }
    const data = {
      staffid,
      status,
    };
    let trainee = await adminupdatesuspendModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const retrievealladminsController = async (req, res, next) => {
  try {
    let trainee = await adminModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const retrievesingleadminController = async (req, res, next) => {
  try {
    const { adminid } = req.params;
    let trainee = await adminModel.findById(adminid);
    const adminId = trainee._id;
    const adminname = trainee.name;
    const adminusername = trainee.username;
    const adminpincode = trainee.pincode;
    const adminaccess = trainee.access;
    const adminlanguage = trainee.language;
    const userdata = {
      adminname,
      adminId,
      adminusername,
      adminaccess,
      adminpincode,
      adminlanguage,
    };
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: userdata,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const adminupdatepasswordController = async (req, res, next) => {
  const { adminid, currentpassword, newpassword, staffid } = req.body;
  try {
    const customerDetails = await adminModel.findById(staffid);
    if (!customerDetails) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "user dont exist on our application",
        data: [],
        error: "user dont exist on our application",
      });
    }

    const checkPassword = await bcrypt.compare(
      currentpassword,
      customerDetails.gen_password
    );

    if (!checkPassword) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect password",
        data: [],
        error: "incorrect password",
      });
    }
    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(newpassword, salt);
    const data = {
      adminid,
      Harshpassword,
      staffid,
      newpassword,
    };

    let trainee = await adminupdatepasswordModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "password updated",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

module.exports = {
  userLoginController,
  adminupdateprofileController,
  adminSignupController,
  suspendadminController,
  admindeleteadminController,
  adminupdatepasswordController,
  retrievealladminsController,
  retrievesingleadminController,
  adminresetPassword,
  adminconfirmforgetpasswordcodeController, adminrNewPasswordLink
};
