const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  account_name: {
    type: String,
  },
 bank_number: {
    type: String,
  },
  account_number: {
    type: String,
  },
  transaction_id: {
    type: String,
  },
  transaction_receipt: {
    type: String,
  },
  additional_note: {
    type: String,
  },
  amount: {
    type: Number,
  },
  bank_wallet: {
    type: String,
  },
  currency: {
    type: String,
  },
  status: {
      type: String,
      default :"pending"
  },
  
  bankid: { type: mongoose.Schema.Types.ObjectId, ref: "bank" },
  orderid: { type: mongoose.Schema.Types.ObjectId, ref: "userorder" },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const paymentModel = mongoose.model("userpayment", Riderschema);
module.exports = {
  paymentModel,
};
