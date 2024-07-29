const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  adminid: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
  paymentid: { type: mongoose.Schema.Types.ObjectId, ref: "payment" },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const paymentstatuslogModel = mongoose.model("paymentstatuslog", Riderschema);
module.exports = {
  paymentstatuslogModel
};
