const { userModel } = require("../../user/core/db/user");
const { architectureModel } = require("../core/db/architecture");



const admindashboardModel = async (data, res) => {
    try {
        const totalusers = await userModel.countDocument()
        const activeusers = await userModel.countDocument({ user_blocked: false })
        
        //views
        const acrhviews = await architectureModel().select()
      const form = await bankModel.findByIdAndUpdate(bankid, {
        $set: {
          bank_active: status,
        },
      });
  
      return "success";
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
  };