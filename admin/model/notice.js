const { noticeModel } = require("../core/db/notice");

const admincreatenoticeModel = async (data, res) => {
  try {
    const { title, document, status } = data;
    const form = await new noticeModel({
      title,
      document,
      status,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatenoticeModel = async (data, res) => {
  try {
    const { title, document, status, noticeid } = data;

    const form = await noticeModel.findByIdAndUpdate(noticeid, {
      $set: {
        title,
        document,
        status,
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminupdatenoticestatusModel = async (data, res) => {
  try {
    const { status, noticeid } = data;

    const form = await noticeModel.findByIdAndUpdate(noticeid, {
      $set: {
        status,
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const admindeletenoticeModel = async (data, res) => {
  try {
    const { noticeid } = data;
    const form = await noticeModel.findByIdAndDelete(noticeid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admindeletenoticeModel,
  admincreatenoticeModel,
  adminupdatenoticeModel,
  adminupdatenoticestatusModel,
};
