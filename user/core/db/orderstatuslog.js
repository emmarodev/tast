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
  orderid: { type: mongoose.Schema.Types.ObjectId, ref: "userorder" },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const orderstatuslogModel = mongoose.model("orderstatuslog", Riderschema);
module.exports = {
  orderstatuslogModel,
};
