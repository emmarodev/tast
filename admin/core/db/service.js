const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
 title: {
    type: String,
  },
  description : {
    type: String,
  },
  photo: {
    type: String,
  },
  tag: {
    type: String,
  },

 
  view: {
    type: Number, default : 0
  },
  share: {
    type: Number, default : 0
  },
  favourite: {
    type: Number, default : 0
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const serviceModel = mongoose.model("service", Riderschema);
module.exports = {
  serviceModel,
};
