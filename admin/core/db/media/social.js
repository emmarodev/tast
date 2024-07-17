const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
 photo: {
    type: String,
  },
 url: {
    type: String,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const socialModel = mongoose.model("social", Riderschema);
module.exports = {
  socialModel,
};
