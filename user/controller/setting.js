const { companyfooterModel } = require("../../admin/core/db/footer/company");
const { civilfooterModel } = require("../../admin/core/db/footer/civil");
const { infotechfooterModel } = require("../../admin/core/db/footer/infotech");



const userfooterlandingpageController = async (req, res, next) => {
    const { userid } = req.body;
    try {
      const company = await companyfooterModel().sort({createdAt : -1})
      const civil = await civilfooterModel().sort({createdAt : -1})
      const infotech = await infotechfooterModel().sort({createdAt : -1})
  
      let footerdata = {company , civil , infotech}
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "login process successful",
        data: footerdata,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
const usermedialandingpageController = async (req, res, next) => {
    try {
      const paymentmedia = await paymentMod().sort({createdAt : -1})
      const civil = await civilfooterModel().sort({createdAt : -1})
      const infotech = await companyfooterModel().sort({createdAt : -1})
  
      let footerdata = {company , civil , infotech}
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "login process successful",
        data: footerdata,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
    userfooterlandingpageController
}