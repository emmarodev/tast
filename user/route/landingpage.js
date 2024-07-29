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

const router = require("express").Router();

router.get("/homepage", userhomepageController);
router.get("/architecture", userarchitectureController);
router.get("/single/architecture/:architectureid",  usersinglearchitectureController);
router.get("/project", userprojectController);
router.get("/service", userservicesController);
router.get("/single/service/:serviceid", usersingleserviceController);
router.get("/order", userorderController);
router.get("/single/order/:orderid", usersingleorderController);
router.get("/blog", userblogController);
router.get("/single/blog/:blogid", usersingleblogController);
// router.get("/single/notice/:noticeid",  usersinglenoticeController);
router.get("/notice",  usernoticeController);
router.get("/employee", useremployeeController);
router.get("/servicegallery", userservicegalleryController)

module.exports = router;
