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
const segmentphotoModel = mongoose.model("segmentphoto", Riderschema);
module.exports = {
  segmentphotoModel,
};
