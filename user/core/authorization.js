const jwt = require('jsonwebtoken');
const { userModel } = require('./db/user');




const user_check_token = async (req, res, next) => {
  let admin = req.body.userid  || req.params.userid
  
    const checkuser = await userModel.findById(admin)
  if (!checkuser) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "user does not exist",
  
      error: "user does not exist",
    });
  }
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1] // gotten the token, now we will decode it

          const decoded = jwt.verify(token, 'user')
        const user = decoded.user
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
    user_check_token 
}