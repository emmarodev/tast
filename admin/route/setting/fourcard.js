const {
  admincreatefourcardController,
  adminupdatefourcardController,
  admindeletefourcardController,
  adminretrievefourcardController,
} = require("../../controller/setting/fourcard");
const { admin_check_token } = require("../../core/authorization");
const { adminValidation } = require("../../core/validations/auth");
const {
  admindeletefourcardValidation,
  adminupdatefourcardValidation,
  admincreatefourcardValidation,
} = require("../../core/validations/setting.js/fourcard");

const router = require("express").Router();

router.post(
  "/create/fourcard",
  admincreatefourcardValidation,
  admin_check_token,
  admincreatefourcardController
);
router.post(
  "/update/fourcard",
  adminupdatefourcardValidation,
  admin_check_token,
  adminupdatefourcardController
);
router.post(
  "/delete/fourcard",
  admindeletefourcardValidation,
  admin_check_token,
  admindeletefourcardController
);
router.get(
  "/retrieve/fourcard/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievefourcardController
);

module.exports = router;
