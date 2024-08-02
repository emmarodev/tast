const { adminmonthlypaymodelModel } = require("../model/dash");



const adminmonthlypatrackController = async (req, res, next) => {
    try {
    
        const { status, startdate, enddate, viewperpage , bankid} = req.body;
        var query = { $and: [] };
    
        if (status != '') {
          query.$and.push({ status: status });
        }
        if (bankid != '') {
          query.$and.push({ bankid: bankid });
        }
        if (startdate != "") {
          query.$and.push({ createdAt: { $gte: startdate } });
        }
        if (enddate != "") {
          query.$and.push({ createdAt: { $lte: enddate } });
        }
        const data = { query, viewperpage };
  
      let trainee = await adminmonthlypaymodelModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      // return handleError(error.message)(res);
    }
};
  

module.exports = {
    adminmonthlypatrackController
}