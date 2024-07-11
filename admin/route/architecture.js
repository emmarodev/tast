const { admincreatearchitectureController, adminupdatearchitectureController, admindeletearchitectureController, adminretrievearchitectureController } = require("../controller/architecture");
const { admin_check_token } = require("../core/authorization");
const { admincreatearchitectureValidation, admindeletearchitectureValidation, adminupdatearchitectureValidation } = require("../core/validations/architecture");
const router = require("express").Router();


router.post(
  "/create/architecture",
  admincreatearchitectureValidation,
  admin_check_token,
  admincreatearchitectureController
);
router.post(
  "/update/architecture",
  adminupdatearchitectureValidation,
  admin_check_token,
  adminupdatearchitectureController
);
router.post(
  "/delete/architecture",
  admindeletearchitectureValidation,
  admin_check_token,
  admindeletearchitectureController
);
router.get(
  "/retrieve/all/architecture",
  admindeletearchitectureValidation,
  admin_check_token,
  adminretrievearchitectureController
);

module.exports = router;
