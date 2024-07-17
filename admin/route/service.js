const {
  admincreateserviceController,
  adminupdateserviceController,
  admindeleteserviceController,
  adminretrieveserviceController,
} = require("../controller/service");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validations/auth");
const {
  admincreateserviceValidation,
  admindeleteserviceValidation,
  adminupdateserviceValidation,
} = require("../core/validations/service");
const router = require("express").Router();

router.post(
  "/create/service",
  admincreateserviceValidation,
  admin_check_token,
  admincreateserviceController
);
router.post(
  "/update/service",
  adminupdateserviceValidation,
  admin_check_token,
  adminupdateserviceController
);
router.post(
  "/delete/service",
  admindeleteserviceValidation,
  admin_check_token,
  admindeleteserviceController
);
router.get(
  "/retrieve/all/service/:adminid",
  adminValidation,
  admin_check_token,
  adminretrieveserviceController
);

module.exports = router;
