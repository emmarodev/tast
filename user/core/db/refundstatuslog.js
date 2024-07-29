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
  refundid: { type: mongoose.Schema.Types.ObjectId, ref: "refund" },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const refundstatuslogModel = mongoose.model("refundstatuslog", Riderschema);
module.exports = {
  refundstatuslogModel
};
