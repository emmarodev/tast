const {
    admincreatesupportlogoController,
    adminupdatesupportlogoController,
    admindeletesupportlogoController,
    adminretrievesupportlogoController,
  } = require("../../controller/media/supportlogo");
  const { admin_check_token } = require("../../core/authorization");
  const { adminValidation } = require("../../core/validations/auth");
  const {
    admincreatesupportlogoValidation,
    admindeletesupportlogoValidation,
    adminupdatesupportlogoValidation,
  } = require("../../core/validations/media/supportlogo");
  const router = require("express").Router();
  
  router.post(
    "/create/supportlogo",
    admincreatesupportlogoValidation,
    admin_check_token,
    admincreatesupportlogoController
  );
  router.post(
    "/update/supportlogo",
    adminupdatesupportlogoValidation,
    admin_check_token,
    adminupdatesupportlogoController
  );
  router.post(
    "/delete/supportlogo",
    admindeletesupportlogoValidation,
    admin_check_token,
    admindeletesupportlogoController
  );
  router.get(
    "/retrieve/all/supportlogo/:adminid",
    adminValidation,
    admin_check_token,
    adminretrievesupportlogoController
  );
  
  module.exports = router;
  