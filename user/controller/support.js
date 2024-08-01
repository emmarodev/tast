const { subscribeModel } = require("../core/db/subscribe");
const { usersubscribeModel, usercontactusModel } = require("../model/support");

const usersubscribeController = async (req, res, next) => {
  const { email } = req.body;
  try {
    const useremail = email.toLowerCase();
    const checkemail = await subscribeModel.findOne({ email: useremail });
    if (checkemail) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "user already subscribed",
      });
    }
    const data = {
      useremail,
    };

    let trainee = await usersubscribeModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const usercontactusController = async (req, res, next) => {
  const { email, name, message, subject, userid } = req.body;
  try {
    const data = {
      email,
      name,
      message,
      subject,
      userid,
    };

    let trainee = await usercontactusModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  usercontactusController,
  usersubscribeController,
};
