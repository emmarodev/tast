const express = require("express");
//using the env
// const dotenv = require("dotenv");
// const helmet = require('helmet');
// dotenv.config({ path: ".env" });
const cors = require("cors");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  pingInterval: 15000, // Ping every 15 seconds
  pingTimeout: 30000, // Wait 30 seconds for the client to respond to pings
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }, // Allow requests from any origin
});

// //for customer
const userauth = require("./user/route/auth");
const { coonectdb } = require("./helper/connectdb");
const userprofile = require("./user/route/profile");
const userlandingpage = require("./user/route/landingpage");
const userorder = require("./user/route/order");
// const userlandingpage = require('./user/route/landingpage')
// const userorder = require('./user/route/order')
// const usercategory = require('./user/route/category')
// const customeraddress = require('./customer/route/address')
// const customercard = require('./customer/route/card')
// const customerorder = require('./customer/route/order')
// const customerwallet = require('./customer/route/wallet')
// const customerstore = require('./customer/route/store')
// const customersupport = require('./customer/route/support')
// const customerservice = require('./customer/route/service')

// // for admin
const adminauth = require("./admin/route/auth");

const adminarchitecture = require("./admin/route/architecture");
const adminproject = require("./admin/route/project");
const adminservice = require("./admin/route/service");
const adminblog = require("./admin/route/blog");
const adminbank = require("./admin/route/bank");
const adminnotice = require("./admin/route/notice");
const adminorder = require("./admin/route/order");
const adminemployee = require("./admin/route/employee");

//setting
const adminbanner = require("./admin/route/setting/banner");
const adminfourcard = require("./admin/route/setting/fourcard");
const adminthreecard = require("./admin/route/setting/threecard");
const adminsecuritypage = require("./admin/route/setting/securitypage");
const adminservicegallery = require("./admin/route/setting/servicegallery");
const adminlocation = require("./admin/route/setting/location");

//footer
const admincivil = require("./admin/route/footer/civil");
const admincompany = require("./admin/route/footer/company");
const admininfotech = require("./admin/route/footer/infotech");

//usermgn
const adminuserorder = require("./admin/route/user/order");
const admindashboard = require("./admin/route/user/dashboard");
const adminpayment_refund = require("./admin/route/user/payment_refund");
//media
const adminpayment = require("./admin/route/media/payment");
const adminsegmentphoto = require("./admin/route/media/segmentphoto");
const adminsupportlogo = require("./admin/route/media/supportlogo");
const adminsocial = require("./admin/route/media/social");
// const adminsocial = require('./admin/route/media/segmentphoto')
// const admincustomer = require('./admin/route/customer')
// const adminbrand = require('./admin/route/brand')
// const adminlandingpage = require('./admin/route/landingpage')
// const adminpackage = require('./admin/route/package')
// const adminprofile = require('./admin/route/profile')
// const adminsetting = require('./admin/route/setting')
// const adminoffer = require('./admin/route/offer')
// const adminservice = require('./admin/route/service')
// const adminsupport = require('./admin/route/support')
// const adminhr = require('./admin/route/hr')

// const { registercustomer } = require("./websocket/customer/auth.socket");
// const { chatuser } = require("./websocket/customer/chat.socket");
// const { checkandupdatepackage } = require("./helper/cron");
// const { registeruser } = require("./customer/controller/socket");
// const { ProductModel } = require("./seller/core/db/product");

//connecting the database
coonectdb();
app.use(
  cors({
    origin: "*",
  })
);
//applying our middleware

//applying our middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = "/user";
const admin = "/admin";
//for customer
app.use(user, userauth);
app.use(user, userprofile);
app.use(user, userlandingpage);
app.use(user, userorder);

//for admin
app.use(admin, adminauth);
app.use(admin, adminarchitecture);
app.use(admin, adminproject);
app.use(admin, adminbank);
app.use(admin, adminservice);
app.use(admin, adminblog);
app.use(admin, adminnotice);
app.use(admin, adminemployee);
app.use(admin, adminorder);

//media
app.use(admin, adminsegmentphoto);
app.use(admin, adminpayment);
app.use(admin, adminsocial);
app.use(admin, adminsupportlogo);

//setting
app.use(admin, adminthreecard);
app.use(admin, adminfourcard);
app.use(admin, adminbanner);
app.use(admin, adminsecuritypage);
app.use(admin, adminservicegallery);
app.use(admin, adminlocation);

//footer
app.use(admin, admincivil);
app.use(admin, admininfotech);
app.use(admin, admincompany);

//user mgn
app.use(admin, adminuserorder);
app.use(admin, adminpayment_refund);
app.use(admin, admindashboard);

//error handler
app.use((req, res, next) => {
  const error = new Error("api not found");
  error.status = 404;
  res.status(404).json({
    status_code: 404,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.status(500).json({
    status_code: 500,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

const port = 5000;

http.listen(port, () => console.log("coonected"));
// registeruser(io)
// chatuser(io)
// app.listen(port, () => {
//   console.log("server connected", port);
// });
