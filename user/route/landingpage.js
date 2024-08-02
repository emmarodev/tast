const {
  userarchitectureController,
  userprojectController,
  userhomepageController,
  usersingleserviceController,
  userservicesController,
  usersinglearchitectureController,
  userorderController,
  usersinglenoticeController,
  usernoticeController,
  userservicegalleryController,
  userblogController,
  usersingleorderController,
  useremployeeController,
  usersingleblogController,
} = require("../controller/landingpage");
const { userfooterlandingpageController } = require("../controller/setting");
const { usercontactusController, usersubscribeController } = require("../controller/support");
const {
  userblogviewController,
  userprojectviewController,
  userarchitectureviewController,
} = require("../controller/view_share");
const {
  userarchitectureviewValidation,
  userblogviewValidation,
  userprojectviewValidation,
} = require("../core/validations/share_view");
const {
  usercontactusValidation,
  usersubscribeValidation,
} = require("../core/validations/support");

const router = require("express").Router();

router.get("/homepage", userhomepageController);
router.get("/architecture", userarchitectureController);
router.get(
  "/single/architecture/:architectureid",
  usersinglearchitectureController
);
router.get("/project", userprojectController);
router.get("/service", userservicesController);
router.get("/single/service/:serviceid", usersingleserviceController);
router.get("/order", userorderController);
router.get("/single/order/:orderid", usersingleorderController);
router.get("/blog", userblogController);
router.get("/single/blog/:blogid", usersingleblogController);
// router.get("/single/notice/:noticeid",  usersinglenoticeController);
router.get("/notice", usernoticeController);
router.get("/employee", useremployeeController);
router.get("/servicegallery", userservicegalleryController);

//views share

router.post(
  "/architecture/action",
  userarchitectureviewValidation,
  userarchitectureviewController
);
router.post("/blog/action", userblogviewValidation, userblogviewController);
router.post(
  "/project/action",
  userprojectviewValidation,
  userprojectviewController
);

//support

router.post("/contactus", usercontactusValidation, usercontactusController);
router.post("/subscribe", usersubscribeValidation, usersubscribeController);


router.get("/footer",  userfooterlandingpageController);


module.exports = router;
