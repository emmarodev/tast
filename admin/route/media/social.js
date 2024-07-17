const {
    admincreatesocialController,
    adminupdatesocialController,
    admindeletesocialController,
    adminretrievesocialController,
  } = require("../../controller/media/social");
  const { admin_check_token } = require("../../core/authorization");
  const { adminValidation } = require("../../core/validations/auth");
  const {
    admincreatesocialValidation,
    admindeletesocialValidation,
    adminupdatesocialValidation,
  } = require("../../core/validations/media/social");
  const router = require("express").Router();
  
  router.post(
    "/create/social",
    admincreatesocialValidation,
    admin_check_token,
    admincreatesocialController
  );
  router.post(
    "/update/social",
    adminupdatesocialValidation,
    admin_check_token,
    adminupdatesocialController
  );
  router.post(
    "/delete/social",
    admindeletesocialValidation,
    admin_check_token,
    admindeletesocialController
  );
  router.get(
    "/retrieve/all/social/:adminid",
    adminValidation,
    admin_check_token,
    adminretrievesocialController
  );
  
  module.exports = router;
  