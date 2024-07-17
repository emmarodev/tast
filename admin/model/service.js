const { serviceModel } = require("../core/db/service");

const admincreateserviceModel = async (data, res) => {
  try {
    const {
        description ,  title , photo , tag
    } = data;
    const form = await new serviceModel({
        description ,  title , photo , tag
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdateserviceModel = async (data, res) => {
  try {
    const {
        description ,  title , photo , tag , serviceid
    } = data;

    const form = await serviceModel.findByIdAndUpdate(serviceid, {
      $set: {
        description ,  title , photo , tag
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminicrementservicecountModel = async (data, res) => {
  try {
    const {
       type , serviceid
    } = data;

      if (type == 'view') {
        await serviceModel.findByIdAndUpdate(serviceid, {
            $inc: {
              view : 1
            },
          });
      }

      else if (type == 'share') {
        await serviceModel.findByIdAndUpdate(serviceid, {
            $inc: {
              share : 1
            },
          });
      } else if (type == 'favourite') {
        await serviceModel.findByIdAndUpdate(serviceid, {
            $inc: {
                favourite : 1
            },
          });
      }
    

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const admindeleteserviceModel = async (data, res) => {
  try {
    const { serviceid } = data;
    const form = await serviceModel.findByIdAndDelete(serviceid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeleteserviceModel,
  adminicrementservicecountModel ,
  admincreateserviceModel, adminupdateserviceModel
  
};
