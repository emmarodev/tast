const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
 photo: {
    type: String,
  },
 title: {
    type: String,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const orderModel = mongoose.model("order", Riderschema);
module.exports = {
  orderModel,
};
