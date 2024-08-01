const { contactusModel } = require("../core/db/contactus");
const { subscribeModel } = require("../core/db/subscribe");

const usersubscribeModel = async (data, res) => {
  try {
    const { useremail } = data;
    const form = await new subscribeModel({
      email: useremail,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const usercontactusModel = async (data, res) => {
  try {
    const { email, name, message, subject, userid } = data;
    const form = await new contactusModel({
      email,
      name,
      message,
      subject,
      userid,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  usersubscribeModel,
  usercontactusModel,
};
