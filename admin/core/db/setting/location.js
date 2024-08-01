const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  flag: {
    type: String,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  contact: [
    {
      logo: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const locationModel = mongoose.model("location", Riderschema);
module.exports = {
  locationModel,
};
