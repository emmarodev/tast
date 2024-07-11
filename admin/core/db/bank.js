const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  name: {
    type: String,
  },
   type  : {
    type: String,
  },
  qrcode: {
    type: String,
  },

  logo: {
    type: String,
  },
  currency_support: {
    type: String,
  },
  tax_rate: {
    type: Array, 
  },
  account_info: {
    type: Array, 
  },
  bank_active: {
    type: Boolean, default : true 
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const bankModel = mongoose.model("bank", Riderschema);
module.exports = {
  bankModel,
};
