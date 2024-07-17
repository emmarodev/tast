const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
 title: {
    type: String,
  },
  name : {
    type: String,
  },
  photo: {
    type: String,
  },
  link: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const employeeModel = mongoose.model("employee", Riderschema);
module.exports = {
  employeeModel,
};
