const {
    admincreatecivilController,
    adminupdatecivilController,
    admindeletecivilController,
    adminretrievecivilController,
  } = require("../../controller/footer/civil");
  const { admin_check_token } = require("../../core/authorization");
  const { adminValidation } = require("../../core/validations/auth");
  const {
    admincreatecivilValidation,
    admindeletecivilValidation,
    adminupdatecivilValidation,
  } = require("../../core/validations/footer/civil");
  const router = require("express").Router();
  
  router.post(
    "/create/civil",
    admincreatecivilValidation,
    admin_check_token,
    admincreatecivilController
  );
  router.post(
    "/update/civil",
    adminupdatecivilValidation,
    admin_check_token,
    adminupdatecivilController
  );
  router.post(
    "/delete/civil",
    admindeletecivilValidation,
    admin_check_token,
    admindeletecivilController
  );
  router.get(
    "/retrieve/all/civil/:adminid",
    adminValidation,
    admin_check_token,
    adminretrievecivilController
  );
  
  module.exports = router;
  