const { architectureModel } = require("../core/db/architecture");

const admincreatearchitectureModel = async (data, res) => {
  try {
    const {
        description ,  title , photo , price
    } = data;
    const form = await new architectureModel({
        description ,  title , photo , price
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdatearchitectureModel = async (data, res) => {
  try {
    const {
        description ,  title , photo , price , architectureid
    } = data;

    const form = await architectureModel.findByIdAndUpdate(architectureid, {
      $set: {
        description ,  title , photo , price
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminicrementarchitecturecountModel = async (data, res) => {
  try {
    const {
       type , architectureid
    } = data;

      if (type == 'view') {
        await architectureModel.findByIdAndUpdate(architectureid, {
            $inc: {
              view : 1
            },
          });
      }

      else if (type == 'share') {
        await architectureModel.findByIdAndUpdate(architectureid, {
            $inc: {
              share : 1
            },
          });
      } else if (type == 'favourite') {
        await architectureModel.findByIdAndUpdate(architectureid, {
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

const admindeletearchitectureModel = async (data, res) => {
  try {
    const { architectureid } = data;
    const form = await architectureModel.findByIdAndDelete(architectureid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeletearchitectureModel,
  adminicrementarchitecturecountModel ,
  admincreatearchitectureModel, adminupdatearchitectureModel
  
};
