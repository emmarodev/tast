const { projectModel } = require("../core/db/project");

const admincreateprojectModel = async (data, res) => {
  try {
    const {
        description ,  title , photo , price
    } = data;
    const form = await new projectModel({
        description ,  title , photo , price
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdateprojectModel = async (data, res) => {
  try {
    const {
        description ,  title , photo , price , projectid
    } = data;

    const form = await projectModel.findByIdAndUpdate(projectid, {
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
const adminicrementprojectcountModel = async (data, res) => {
  try {
    const {
       type , projectid
    } = data;

      if (type == 'view') {
        await projectModel.findByIdAndUpdate(projectid, {
            $inc: {
              view : 1
            },
          });
      }

      else if (type == 'share') {
        await projectModel.findByIdAndUpdate(projectid, {
            $inc: {
              share : 1
            },
          });
      } else if (type == 'favourite') {
        await projectModel.findByIdAndUpdate(projectid, {
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

const admindeleteprojectModel = async (data, res) => {
  try {
    const { projectid } = data;
    const form = await projectModel.findByIdAndDelete(projectid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeleteprojectModel,
  adminicrementprojectcountModel ,
  admincreateprojectModel, adminupdateprojectModel
  
};
