const { architectureModel } = require("../../admin/core/db/architecture");
const { blogModel } = require("../../admin/core/db/blog");
const { projectModel } = require("../../admin/core/db/project");

const userarchitectureviewModel = async (data, res) => {
  try {
    const { architectureid, contain } = data;

    if (contain == "view") {
      await architectureModel.findByIdAndUpdate(architectureid, {
        $inc: {
          view: 1,
        },
      });
    } else if (contain == "share") {
      await architectureModel.findByIdAndUpdate(architectureid, {
        $inc: {
          share: 1,
        },
      });
    } else if (contain == "like") {
      await architectureModel.findByIdAndUpdate(architectureid, {
        $inc: {
          favourite: 1,
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

const userprojectviewModel = async (data, res) => {
  try {
    const { projectid, contain } = data;

    if (contain == "view") {
      await projectModel.findByIdAndUpdate(projectid, {
        $inc: {
          view: 1,
        },
      });
    } else if (contain == "share") {
      await projectModel.findByIdAndUpdate(projectid, {
        $inc: {
          share: 1,
        },
      });
    } else if (contain == "like") {
      await projectModel.findByIdAndUpdate(projectid, {
        $inc: {
          favourite: 1,
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

const userblogviewModel = async (data, res) => {
  try {
    const { blogid, contain } = data;

    if (contain == "view") {
      await blogModel.findByIdAndUpdate(blogid, {
        $inc: {
          view: 1,
        },
      });
    } else if (contain == "share") {
      await blogModel.findByIdAndUpdate(blogid, {
        $inc: {
          share: 1,
        },
      });
    } else if (contain == "like") {
      await blogModel.findByIdAndUpdate(blogid, {
        $inc: {
          favourite: 1,
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

module.exports = {
  userblogviewModel,
  userprojectviewModel,
  userarchitectureviewModel,
};
