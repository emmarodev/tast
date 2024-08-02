const { paymentModel } = require("../../user/core/db/payment");
const { refundModel } = require("../../user/core/db/refund");


const adminmonthlypaymodelModel = async (data, res) => {
    try {
      const { viewperpage, query } = data;
    
    const view = Math.floor(viewperpage/2)
      let userpayment;
      if (query.$and.length >= 1) {
        userpayment = await paymentModel.find(query).limit(view).select('amount currency')
      } else {
        userpayment = await paymentModel.find().limit(view).select('amount currency')
      }
      let userrefund;
      if (query.$and.length >= 1) {
        userrefund = await refundModel.find(query).limit(view).select('amount currency')
      } else {
        userrefund = await refundModel.find().limit(view).select('amount currency')
      }
     
      const dashdata =  userrefund.concat(userpayment);
  
      return dashdata;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};
  
module.exports = {
    adminmonthlypaymodelModel
}