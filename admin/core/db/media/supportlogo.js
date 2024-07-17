const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
 logo: {
    type: String,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const supportlogoModel = mongoose.model("supportlogo", Riderschema);
module.exports = {
  supportlogoModel,
};
