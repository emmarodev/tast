const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
 title: {
    type: String,
  },
  status: {
    type: String, default:""
  },
 document: {
    type: String,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const noticeModel = mongoose.model("notice", Riderschema);
module.exports = {
  noticeModel,
};
