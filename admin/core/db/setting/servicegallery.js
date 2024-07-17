const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  media: {
    type: String,
  },
   title : {
    type: String,
  },
  media_type: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const servicegalleryModel = mongoose.model("servicegallery", Riderschema);
module.exports = {
  servicegalleryModel,
};
