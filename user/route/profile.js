const {
  userupdatepersonaldeatilController,
  userupdatepermanentaddressController,
  userupdatepresentaddressController,
  userupdatecompanyinfomationController,
  userupdatesociallinkController,
  userretrieveprofileController,
} = require("../controller/profile");
const { admin_check_token } = require("../core/authorization");
const { userValidation } = require("../core/validations/auth");
const {
  userupdatepersoneldetailsValidation, userupdateaddressValidation, userupdatecompanyinfoValidation, userupdatesociallinkValidation,
} = require("../core/validations/profile");

const router = require("express").Router();

router.post(
  "/update/details",
  userupdatepersoneldetailsValidation,
  admin_check_token,
  userupdatepersonaldeatilController
);
router.post(
  "/update/permanent/address",
  userupdateaddressValidation,
  admin_check_token,
  userupdatepermanentaddressController
);
router.post(
  "/update/present/address",
  userupdateaddressValidation,
  admin_check_token,
  userupdatepresentaddressController
);
router.post(
  "/update/company/info",
  userupdatecompanyinfoValidation,
  admin_check_token,
  userupdatecompanyinfomationController
);
router.post(
  "/update/social_link",
  userupdatesociallinkValidation,
  admin_check_token,
  userupdatesociallinkController
);
router.post(
  "/retrieve/profile",
  userValidation,
  admin_check_token,
  userretrieveprofileController
);

module.exports = router;
