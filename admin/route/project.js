const {
  admincreateprojectController,
  adminupdateprojectController,
  admindeleteprojectController,
  adminretrieveprojectController,
} = require("../controller/project");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validations/auth");
const {
  admincreateprojectValidation,
  admindeleteprojectValidation,
  adminupdateprojectValidation,
} = require("../core/validations/project");
const router = require("express").Router();

router.post(
  "/create/project",
  admincreateprojectValidation,
  admin_check_token,
  admincreateprojectController
);
router.post(
  "/update/project",
  adminupdateprojectValidation,
  admin_check_token,
  adminupdateprojectController
);
router.post(
  "/delete/project",
  admindeleteprojectValidation,
  admin_check_token,
  admindeleteprojectController
);
router.get(
  "/retrieve/all/project/:adminid",
  adminValidation,
  admin_check_token,
  adminretrieveprojectController
);

module.exports = router;
