const { sendEmail } = require("../../helper/email");
const { userModel } = require("../core/db/user");
const bcrypt = require("bcrypt");
const { generateuserauthcode, generateRandomNumber } = require("../core/utils");
const { userSignupModel, userLoginModel, userUpdatepasswordModel } = require("../model/auth");

const jwt = require("jsonwebtoken");
const userSignupController = async (req, res, next) => {
  const { email, password, name } = req.body;
  const userEmail = email.toLowerCase();
  const code = await generateuserauthcode();
  try {
    const people = await userModel.findOne({ email: userEmail });
    if (people && people.auth.auth_verified) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "email already exist",
        data: [],
        error: "email already exist",
      });
    }
    const templateFile = "user.verification.ejs";
    const subject = "Verification email";
    sendEmail(email, subject, templateFile, code);
    //end of sending mail
    if (people && !people.auth.auth_verified) {
      //update the user code so you can verify him
      await userModel.findByIdAndUpdate(people._id, {
        $set: {
          "auth.auth_code": code,
        },
      });
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "check your email",
      });
    }
    //end of verification email
    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(password, salt);
    const user = await userModel.findOne({ email: userEmail });
    if (user) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "email already exist",
        data: [],
        error: "email already exist",
      });
    }

    const data = {
      userEmail,
      Harshpassword,
      name,
      code,
    };

    let trainee = await userSignupModel(data, res);
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

const userconfirmemailcontroller = async (req, res) => {
  const { code } = req.body;
  try {
    const checkcode = await userModel.findOne({ "auth.auth_code": code });

    if (!checkcode) {
      return res.status(400).json({
        status_code: 400,
        status: true,
        message: "wrong code ",
      });
    }
    const email = checkcode.email;
    if (checkcode.auth.auth_verified) {
      return res.status(400).json({
        status_code: 400,
        status: true,
        message: "email already verified",
      });
    }
    //update the email to true
    const updatecode = await userModel.findOneAndUpdate(
      { email },
      {
        $set: {
          "auth.auth_verified": true,
        },
      }
    );
    const templateFile = "user.welcome.ejs";
    const subject = "Verification email";
    const name = checkcode.name;
    sendEmail(email, subject, templateFile, name);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "successss",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const userLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  const userEmail = email.toLowerCase();
  try {
    const userDetails = await userModel.findOne({
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
    //check if the email is verified
    if (!userDetails.auth.auth_verified) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "user email is not veirified",
        data: [],
        error: "user email is not veirified",
      });
    }

    const checkPassword = await bcrypt.compare(password, userDetails.password);
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

    let trainee = await userLoginModel(data, res);

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
const userconfirmforgetpasswordcodeController = async (req, res, next) => {
  const { code, email } = req.body;
  const userEmail = email.toLowerCase();
  try {
    const userDetails = await userModel.findOne({
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

const userNewPasswordLink = async (req, res) => {
  const { email } = req.body;
  const useremail = email.toLowerCase();
  try {
    const client = await userModel.findOne({ email: useremail });

    if (!client) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect email",
        error: "incorrect email",
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
    const form = await userModel.findByIdAndUpdate(riderid, {
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

const userresetPassword = async (req, res, next) => {
    const { email, currentpassword, newpassword } = req.body;
    try {
        const customerDetails = await userModel.findOne({email});
  
      const checkPassword = await bcrypt.compare(
        currentpassword,
        customerDetails.password
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
   
        Harshpassword, email,
      };
  
      let trainee = await userUpdatepasswordModel(data, res);
  
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
module.exports = {
  userSignupController,
  userconfirmemailcontroller,
  userLoginController,
  userNewPasswordLink,
  userresetPassword,
  userconfirmforgetpasswordcodeController,
};
