const {
    admincreateorderController,
    adminupdateorderController,
    admindeleteorderController,
    adminretrieveorderController,
  } = require("../controller/order");
  const { admin_check_token } = require("../core/authorization");
  const { adminValidation } = require("../core/validations/auth");
  const {
    admincreateorderValidation,
    admindeleteorderValidation,
    adminupdateorderValidation,
  } = require("../core/validations/order");
  const router = require("express").Router();
  
  router.post(
    "/create/order",
    admincreateorderValidation,
    admin_check_token,
    admincreateorderController
  );
  router.post(
    "/update/order",
    adminupdateorderValidation,
    admin_check_token,
    adminupdateorderController
  );
  router.post(
    "/delete/order",
    admindeleteorderValidation,
    admin_check_token,
    admindeleteorderController
  );
  router.get(
    "/retrieve/all/order/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveorderController
  );
  
  module.exports = router;
  