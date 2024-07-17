const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  image: {
    type: String,
  },
   title : {
    type: String,
  },
  tag: {
    type: String,
  },
  description: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const securitypageModel = mongoose.model("securitypage", Riderschema);
module.exports = {
  securitypageModel,
};
