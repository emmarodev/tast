const { userModel } = require("../core/db/user");

const userupdatepersoneldetailModel = async (data, res) => {
  try {
    const {
      name,
      occupation,
      language,
      dob,
      userEmail,
      phone,
      identification,
      userid,
    } = data;

    const form = await userModel.findByIdAndUpdate(userid, {
      $set: {
        name,
        occupation,
        language,
        dob,
        email: userEmail,
        phone,
        identification,
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const userupdatepresentaddressModel = async (data, res) => {
  try {
    const { state, country, city, postalzone, userid } = data;

    const form = await userModel.findByIdAndUpdate(userid, {
      $set: {
        present_address: {
          state,
          country,
          city,
          postalzone,
        },
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const userupdatepermanentaddressModel = async (data, res) => {
  try {
    const { state, country, city, postalzone, userid } = data;

    const form = await userModel.findByIdAndUpdate(userid, {
      $set: {
        permanent_address: {
          state,
          country,
          city,
          postalzone,
        },
      },
    });
    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const userupdatecompanyinfoModel = async (data, res) => {
  try {
    const { company_name, phone, email, website_url, userid } = data;

    const form = await userModel.findByIdAndUpdate(userid, {
      $set: {
        company_info: {
          company_name,
          phone,
          email,
          website_url,
        },
      },
    });
    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const userupdatesociallinkModel = async (data, res) => {
  try {
    const { social_link, userid } = data;

    const form = await userModel.findByIdAndUpdate(userid, {
      $set: {
        social_link,
      },
    });
    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  userupdatepersoneldetailModel,
  userupdatecompanyinfoModel,
  userupdatepermanentaddressModel,
  userupdatepresentaddressModel, userupdatesociallinkModel
};
