const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
 note: {
    type: String,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const infotechfooterModel = mongoose.model("infotechfooter", Riderschema);
module.exports = {
  infotechfooterModel,
};
