const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  account_name: {
    type: String,
  },
  bank_name : {
    type: String,
  },
  account_number: {
    type: String,
  },
  routing_number: {
    type: String,
  },
  code: {
    type: String,
  },
  transaction_receipt: {
    type: String,
  },
  additional_note: {
    type: String,
  },
  reason: {
    type: String,
  },
  amount: {
    type: String,
  },
 bank_wallet: {
    type: String,
  },
  status: {
      type: String,
      default :"pending"
  },
  
  orderid: { type: mongoose.Schema.Types.ObjectId, ref: "userorder" },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const refundModel = mongoose.model("refund", Riderschema);
module.exports = {
  refundModel,
};
