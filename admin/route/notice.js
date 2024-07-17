const {
  admincreatenoticeController,
  adminupdatenoticeController,
  admindeletenoticeController,
  adminretrievenoticeController,
} = require("../controller/notice");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validations/auth");
const {
  admincreatenoticeValidation,
  admindeletenoticeValidation,
  adminupdatenoticeValidation,
  adminupdateprojectstatusValidation,
} = require("../core/validations/notice");
const router = require("express").Router();

router.post(
  "/create/notice",
  admincreatenoticeValidation,
  admin_check_token,
  admincreatenoticeController
);
router.post(
  "/update/notice",
  adminupdatenoticeValidation,
  admin_check_token,
  adminupdatenoticeController
);
// router.post(
//   "/update/notice/status",
//   adminupdatenoticestatusValidation,
//   admin_check_token,
//   adminupdatenoticeController
// );
router.post(
  "/delete/notice",
  admindeletenoticeValidation,
  admin_check_token,
  admindeletenoticeController
);
router.get(
  "/retrieve/all/notice/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievenoticeController
);

module.exports = router;
