const { admincreatebannerController, adminupdatebannerController, admindeletebannerController, adminretrievebannerController } = require("../../controller/setting/banner");
const { admin_check_token } = require("../../core/authorization");
const { adminValidation } = require("../../core/validations/auth");
const {
  admindeletebannerValidation,
  adminupdatebannerValidation,
  admincreatebannerValidation,
} = require("../../core/validations/setting.js/banner");

const router = require("express").Router();


router.post(
  "/create/banner",
  admincreatebannerValidation,
  admin_check_token,
  admincreatebannerController
);
router.post(
  "/update/banner",
  adminupdatebannerValidation,
  admin_check_token,
  adminupdatebannerController
);
router.post(
  "/delete/banner",
  admindeletebannerValidation,
  admin_check_token,
  admindeletebannerController
);
router.get(
  "/retrieve/banner/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievebannerController
);


module.exports = router