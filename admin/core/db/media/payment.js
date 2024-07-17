const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
 photo: {
    type: String,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const paymentModel = mongoose.model("payment", Riderschema);
module.exports = {
  paymentModel,
};
