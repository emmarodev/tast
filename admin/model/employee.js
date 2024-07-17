const { employeeModel } = require("../core/db/employee");

const admincreateemployeeModel = async (data, res) => {
  try {
    const {
        title, photo, name , link 
    } = data;
    const form = await new employeeModel({
        title, photo, name , link 
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdateemployeeModel = async (data, res) => {
  try {
    const {
        title, photo, name , link , employeeid
    } = data;

    const form = await employeeModel.findByIdAndUpdate(employeeid, {
      $set: {
        title, photo, name , link 
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminicrementemployeecountModel = async (data, res) => {
  try {
    const {
       type , employeeid
    } = data;

      if (type == 'view') {
        await employeeModel.findByIdAndUpdate(employeeid, {
            $inc: {
              view : 1
            },
          });
      }

      else if (type == 'share') {
        await employeeModel.findByIdAndUpdate(employeeid, {
            $inc: {
              share : 1
            },
          });
      } else if (type == 'favourite') {
        await employeeModel.findByIdAndUpdate(employeeid, {
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

const admindeleteemployeeModel = async (data, res) => {
  try {
    const { employeeid } = data;
    const form = await employeeModel.findByIdAndDelete(employeeid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



module.exports = {
  admindeleteemployeeModel,
  admincreateemployeeModel, adminupdateemployeeModel
  
};
