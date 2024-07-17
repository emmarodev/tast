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
const companyfooterModel = mongoose.model("companyfooter", Riderschema);
module.exports = {
  companyfooterModel,
};
