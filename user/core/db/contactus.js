const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  message: {
    type: String,
  },
  email: {
    type: String,
  },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" , default : null},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const contactusModel = mongoose.model("contactus", Riderschema)
module.exports = {
  contactusModel,
};
