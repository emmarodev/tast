const { admincreatethreecardController, adminupdatethreecardController, admindeletethreecardController, adminretrievethreecardController } = require("../../controller/setting/threecard");
const { admin_check_token } = require("../../core/authorization");
const { adminValidation } = require("../../core/validations/auth");
const {
  admindeletethreecardValidation,
  adminupdatethreecardValidation,
  admincreatethreecardValidation,
} = require("../../core/validations/setting.js/threecard");

const router = require("express").Router();


router.post(
  "/create/threecard",
  admincreatethreecardValidation,
  admin_check_token,
  admincreatethreecardController
);
router.post(
  "/update/threecard",
  adminupdatethreecardValidation,
  admin_check_token,
  adminupdatethreecardController
);
router.post(
  "/delete/threecard",
  admindeletethreecardValidation,
  admin_check_token,
  admindeletethreecardController
);
router.get(
  "/retrieve/threecard/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievethreecardController
);


module.exports = router