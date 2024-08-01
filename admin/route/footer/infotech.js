const {
    admincreateinfotechController,
    adminupdateinfotechController,
    admindeleteinfotechController,
    adminretrieveinfotechController,
  } = require("../../controller/footer/infotech");
  const { admin_check_token } = require("../../core/authorization");
  const { adminValidation } = require("../../core/validations/auth");
  const {
    admincreateinfotechValidation,
    admindeleteinfotechValidation,
    adminupdateinfotechValidation,
  } = require("../../core/validations/footer/infotech");
  const router = require("express").Router();
  
  router.post(
    "/create/infotech",
    admincreateinfotechValidation,
    admin_check_token,
    admincreateinfotechController
  );
  router.post(
    "/update/infotech",
    adminupdateinfotechValidation,
    admin_check_token,
    adminupdateinfotechController
  );
  router.post(
    "/delete/infotech",
    admindeleteinfotechValidation,
    admin_check_token,
    admindeleteinfotechController
  );
  router.get(
    "/retrieve/all/infotech/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveinfotechController
  );
  
  module.exports = router;
  