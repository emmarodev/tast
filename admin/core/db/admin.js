const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  name: {
    type: String,
  },
  username : {
    type: String,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
  },
  gen_password: {
    type: String,
  },
  language: {
    type: Array, 
  },
  login_url: {
    type: Array, 
  },
 
  pincode: {
    type: String, default :""
  },
 access: {
    type: Number, default :0
  },


  admin_blocked: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const adminModel = mongoose.model("admin", Riderschema);
module.exports = {
  adminModel,
};
