const jwt = require('jsonwebtoken');
const { adminModel } = require('./db/admin');


const admin_check_token = async (req, res, next) => {
  let admin = req.body.adminid || req.params.adminid
  
    const checkuser = await adminModel.findById(admin)
  if (!checkuser) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "admin does not exist",
  
      error: "admin does not exist",
    });
  }
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1] // gotten the token, now we will decode it

          const decoded = jwt.verify(token, 'admin')
        const user = decoded.admin
        if (admin != user) {
          console.log('posis' )
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
         }

       next()
      } catch (error) {
        console.log(error)
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
      }
    }
    if (!token) {
        return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
    }
}



module.exports = {
    admin_check_token 
}