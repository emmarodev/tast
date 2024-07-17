const {
    admincreatesecuritypageController,
    adminupdatesecuritypageController,
    admindeletesecuritypageController,
    adminretrievesecuritypageController,
  } = require("../../controller/setting/securitypage");
  const { admin_check_token } = require("../../core/authorization");
  const { adminValidation } = require("../../core/validations/auth");
  const {
    admindeletesecuritypageValidation,
    adminupdatesecuritypageValidation,
    admincreatesecuritypageValidation,
  } = require("../../core/validations/setting.js/securitypage");
  
  const router = require("express").Router();
  
  router.post(
    "/create/securitypage",
    admincreatesecuritypageValidation,
    admin_check_token,
    admincreatesecuritypageController
  );
  router.post(
    "/update/securitypage",
    adminupdatesecuritypageValidation,
    admin_check_token,
    adminupdatesecuritypageController
  );
  router.post(
    "/delete/securitypage",
    admindeletesecuritypageValidation,
    admin_check_token,
    admindeletesecuritypageController
  );
  router.get(
    "/retrieve/securitypage",
    adminValidation,
    admin_check_token,
    adminretrievesecuritypageController
  );
  
  module.exports = router;
  