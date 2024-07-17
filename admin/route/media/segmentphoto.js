const {
  admincreatesegmentphotoController,
  adminupdatesegmentphotoController,
  admindeletesegmentphotoController,
  adminretrievesegmentphotoController,
} = require("../../controller/media/segmentphoto");
const { admin_check_token } = require("../../core/authorization");
const { adminValidation } = require("../../core/validations/auth");
const {
  admincreatesegmentphotoValidation,
  admindeletesegmentphotoValidation,
  adminupdatesegmentphotoValidation,
} = require("../../core/validations/media/segmentphoto");
const router = require("express").Router();

router.post(
  "/create/segmentphoto",
  admincreatesegmentphotoValidation,
  admin_check_token,
  admincreatesegmentphotoController
);
router.post(
  "/update/segmentphoto",
  adminupdatesegmentphotoValidation,
  admin_check_token,
  adminupdatesegmentphotoController
);
router.post(
  "/delete/segmentphoto",
  admindeletesegmentphotoValidation,
  admin_check_token,
  admindeletesegmentphotoController
);
router.get(
  "/retrieve/all/segmentphoto/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievesegmentphotoController
);

module.exports = router;
