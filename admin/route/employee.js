const {
    admincreateemployeeController,
    adminupdateemployeeController,
    admindeleteemployeeController,
    adminretrieveemployeeController,
  } = require("../controller/employee");
  const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validations/auth");
  const {
    admincreateemployeeValidation,
    admindeleteemployeeValidation,
    adminupdateemployeeValidation,
  } = require("../core/validations/employee");
  const router = require("express").Router();
  
  router.post(
    "/create/employee",
    admincreateemployeeValidation,
    admin_check_token,
    admincreateemployeeController
  );
  router.post(
    "/update/employee",
    adminupdateemployeeValidation,
    admin_check_token,
    adminupdateemployeeController
  );
  router.post(
    "/delete/employee",
    admindeleteemployeeValidation,
    admin_check_token,
    admindeleteemployeeController
  );
  router.get(
    "/retrieve/all/employee/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveemployeeController
  );
  
  module.exports = router;
  