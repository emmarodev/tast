const { blogModel } = require("../core/db/blog");

const admincreateblogModel = async (data, res) => {
  try {
    const {
        description ,  title , photo , tag
    } = data;
    const form = await new blogModel({
        description ,  title , photo , tag
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminupdateblogModel = async (data, res) => {
  try {
    const {
        description ,  title , photo , tag , blogid
    } = data;

    const form = await blogModel.findByIdAndUpdate(blogid, {
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
const adminicrementblogcountModel = async (data, res) => {
  try {
    const {
       type , blogid
    } = data;

      if (type == 'view') {
        await blogModel.findByIdAndUpdate(blogid, {
            $inc: {
              view : 1
            },
          });
      }

      else if (type == 'share') {
        await blogModel.findByIdAndUpdate(blogid, {
            $inc: {
              share : 1
            },
          });
      } else if (type == 'favourite') {
        await blogModel.findByIdAndUpdate(blogid, {
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

const admindeleteblogModel = async (data, res) => {
  try {
    const { blogid } = data;
    const form = await blogModel.findByIdAndDelete(blogid);

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admindeleteblogModel,
  adminicrementblogcountModel ,
  admincreateblogModel, adminupdateblogModel
  
};
