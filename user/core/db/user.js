const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Riderschema = new schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
  },
  language: {
    type: Array, default :[]
  },
  occupation: {
    type: String, default :""
  },
  dob: {
    type: String, default :""
  },
  present_address: {
    country: {
        type: String, default :""
      },
    city: {
        type: String, default :""
      },
    state: {
        type: String, default :""
      },
    postalzone: {
        type: String, default :""
      },
  },
  permanent_address: {
    country: {
        type: String, default :""
      },
    city: {
        type: String, default :""
      },
    state: {
        type: String, default :""
      },
    postalzone: {
        type: String, default :""
      },
  },

  identification: {
    type: String, default :""
  },
  company_info: {
    phone: {
        type: String, default :""
      },
    email: {
        type: String, default :""
      },
    company_name: {
        type: String, default :""
      },
      website_url: {
        type: String, default :""
      },
  },
  finance: {
    total_order: {
        type: Number, default :0
      },
    total_amount: {
        type: Number, default :0
      },
    total_paid: {
        type: Number, default :0
      },
      money_left: {
        type: Number, default :0
      },
      refund_amount: {
        type: Number, default :0
      },
      profit: {
        type: Number, default :0
      },
  },
  social_link: {
    default: [],
    type: [
      {
        url: {
          type: String,
        },
        logo: {
          type: String,
        },
      },
    ],
  },

  user_blocked: {
    type: Boolean,
    default: false,
  },
  auth: {
    auth_token: {
      type: String,
      default: "",
    },
    auth_code: {
      type: String,
      default: "",
    },
    auth_verified: {
      type: Boolean,
      default: false,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const userModel = mongoose.model("user", Riderschema);
module.exports = {
  userModel,
};
