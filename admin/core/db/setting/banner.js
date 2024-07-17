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

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const bannerModel = mongoose.model("banner", Riderschema);
module.exports = {
  bannerModel,
};
