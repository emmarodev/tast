const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  project_requirement: {
    type: String,
    default: "",
  },

  project_deadline: {
    type: String,
    default: "",
  },
  pay_currency: {
    type: String,
    default: "",
  },
  reference_name: {
    type: String,
    default: "",
  },
  work_location: {
    type: String,
    default: "",
  },
  project_details: {
    type: String,
    default: "",
  },
  user_signatory: {
    signature_type: {
      type: String,
      default: "",
    },
    signature: {
      type: String,
      default: "",
    },
  },
  admin_signatory: {
    signature_type: {
      type: String,
      default: "",
    },
    signature: {
      type: String,
      default: "",
    },
    adminid: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
  },
  project_files: [
    {
      file_type: {
        type: String,
        default: "",
      },
      file_url: {
        type: String,
        default: "",
      },
    },
  ],
  budget: {
    type: Number,
  },
  paid_amount: {
    type: Number,
    default: 0,
  },
  balance_amount: {
    type: Number,
    default: 0,
  },

  project_type: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "pending",
  },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  orderid: { type: mongoose.Schema.Types.ObjectId, ref: "order" },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const userorderModel = mongoose.model("userorder", Riderschema);
module.exports = {
  userorderModel,
};
