const { threecardModel } = require("../../admin/core/db/setting/threecards");
const { fourcardModel } = require("../../admin/core/db/setting/fourcard");
const {
  securitypageModel,
} = require("../../admin/core/db/setting/securitypage");
const { serviceModel } = require("../../admin/core/db/service");
const {
  servicegalleryModel,
} = require("../../admin/core/db/setting/servicegallery");
const { projectModel } = require("../../admin/core/db/project");
const { architectureModel } = require("../../admin/core/db/architecture");
const { blogModel } = require("../../admin/core/db/blog");

const userhomepageModel = async (data, res) => {
  try {
    const threecard = await threecardModel.find().sort({ createdAt: -1 });
    const fourcard = await fourcardModel.find().sort({ createdAt: -1 });
    const securitypage = await securitypageModel
      .find()
      .limit(1)
      .sort({ createdAt: -1 });
    const service = await serviceModel.find().limit(6).sort({ createdAt: -1 });
    const servicegallery = await servicegalleryModel
      .find()
      .limit(9)
      .sort({ createdAt: -1 });
    const project = await projectModel.find().limit(8).sort({ createdAt: -1 });
    const architecture = await architectureModel
      .find()
      .limit(8)
      .sort({ createdAt: -1 });
    const blog = await blogModel.find().limit(8).sort({ createdAt: -1 });
    const userData = {
      service,
      securitypage,
      fourcard,
      threecard,
      blog,
      architecture,
      project,
      servicegallery,
    };

    return userData;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  userhomepageModel
};
