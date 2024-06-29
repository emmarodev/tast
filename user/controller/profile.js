const { userModel } = require("../core/db/user");
const {
  userupdatepresentaddressModel,
  userupdatepersoneldetailModel,
  userupdatepermanentaddressModel,
  userupdatecompanyinfoModel,
  userupdatesociallinkModel,
} = require("../model/profile");

const userretrieveprofileController = async (req, res, next) => {
  const {
    userid,
  } = req.body;
  try {
    const staff = await userModel.findById(userid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: staff,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const userupdatepersonaldeatilController = async (req, res, next) => {
  const {
    name,
    occupation,
    language,
    dob,
    email,
    phone,
    identification,
    userid,
  } = req.body;
  const userEmail = email.toLowerCase();
  try {
    const staff = await userModel.findOne({ email: userEmail });

    if (staff._id != userid) {
      return res.status(200).json({
        status_code: 400,
        status: true,
        message: "email already exist",
        error: "email already exist",
      });
    }

    const data = {
      name,
      occupation,
      language,
      dob,
      userEmail,
      phone,
      identification,
      userid,
    };

    let trainee = await userupdatepersoneldetailModel(data, res);

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

const userupdatepresentaddressController = async (req, res, next) => {
  const { state, country, city, postalzone, userid } = req.body;
  try {
    const data = {
      state,
      country,
      city,
      postalzone,
      userid,
    };

    let trainee = await userupdatepresentaddressModel(data, res);

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
const userupdatepermanentaddressController = async (req, res, next) => {
  const { state, country, city, postalzone, userid } = req.body;
  try {
    const data = {
      state,
      country,
      city,
      postalzone,
      userid,
    };

    let trainee = await userupdatepermanentaddressModel(data, res);

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
const userupdatecompanyinfomationController = async (req, res, next) => {
  const { company_name, phone, email, website_url, userid } = req.body;
  try {
    const data = {
      company_name,
      phone,
      email,
      website_url,
      userid,
    };

    let trainee = await userupdatecompanyinfoModel(data, res);

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
const userupdatesociallinkController = async (req, res, next) => {
  const { social_link, userid } = req.body;
  try {
    const data = {
      social_link,
      userid,
    };

    let trainee = await userupdatesociallinkModel(data, res);

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
  userupdatepermanentaddressController,
  userupdatepresentaddressController,
  userupdatepersonaldeatilController,
  userupdatesociallinkController,
  userupdatecompanyinfomationController, userretrieveprofileController
};
