const {
    admincreatelocationController,
    adminupdatelocationController,
    admindeletelocationController,
    adminretrievelocationController,
  } = require("../../controller/setting/location");
  const { admin_check_token } = require("../../core/authorization");
  const { adminValidation } = require("../../core/validations/auth");
  const {
    admindeletelocationValidation,
    adminupdatelocationValidation,
    admincreatelocationValidation,
  } = require("../../core/validations/setting.js/location");
  
  const router = require("express").Router();
  
  router.post(
    "/create/location",
    admincreatelocationValidation,
    admin_check_token,
    admincreatelocationController
  );
  router.post(
    "/update/location",
    adminupdatelocationValidation,
    admin_check_token,
    adminupdatelocationController
  );
  router.post(
    "/delete/location",
    admindeletelocationValidation,
    admin_check_token,
    admindeletelocationController
  );
  router.get(
    "/retrieve/location/:adminid",
    adminValidation,
    admin_check_token,
    adminretrievelocationController
  );
  
  module.exports = router;
  