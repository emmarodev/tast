const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const subscribeModel = mongoose.model("subscribe", Riderschema);
module.exports = {
  subscribeModel,
};
