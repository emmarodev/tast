const {
  userLoginController,
  adminupdateprofileController,
  adminSignupController,
  suspendadminController,
  admindeleteadminController,
  adminupdatepasswordController,
  retrievealladminsController,
  retrievesingleadminController,
} = require("../controller/auth");
const { admin_check_token } = require("../core/authorization");
const {
  adminsignupValidation,
  adminupdateprofileValidation,
  adminloginValidation,
  adminupdatepasswordValidation,
  admindeletestaffValidation,
  adminValidation,
  adminchnagestaffstatusValidation,
} = require("../core/validations/auth");

const router = require("express").Router();

router.post("/create/staff", adminsignupValidation, adminSignupController);
router.post("/login", adminloginValidation, userLoginController);
router.post(
  "/update/staff",
  admin_check_token,
  adminupdateprofileValidation,
  adminupdateprofileController
);
router.post(
  "/update/password",
  admin_check_token,
  adminupdatepasswordValidation,
  adminupdatepasswordController
);
router.post(
  "/delete/staff",
  admin_check_token,
  admindeletestaffValidation,
  admindeleteadminController
);
router.post(
  "/update/status",
  admin_check_token,
  adminchnagestaffstatusValidation,
  suspendadminController
);
router.get(
  "/retrieve/staff/:adminid",
  admin_check_token,
  adminValidation,
  retrievealladminsController
);
router.get(
  "/retrieve/profile/:adminid",
  admin_check_token,
  adminValidation,
  retrievesingleadminController
);

module.exports = router;
