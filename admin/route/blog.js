const {
    admincreateblogController,
    adminupdateblogController,
    admindeleteblogController,
    adminretrieveblogController,
  } = require("../controller/blog");
  const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validations/auth");
  const {
    admincreateblogValidation,
    admindeleteblogValidation,
    adminupdateblogValidation,
  } = require("../core/validations/blog");
  const router = require("express").Router();
  
  router.post(
    "/create/blog",
    admincreateblogValidation,
    admin_check_token,
    admincreateblogController
  );
  router.post(
    "/update/blog",
    adminupdateblogValidation,
    admin_check_token,
    adminupdateblogController
  );
  router.post(
    "/delete/blog",
    admindeleteblogValidation,
    admin_check_token,
    admindeleteblogController
  );
  router.get(
    "/retrieve/all/blog/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveblogController
  );
  
  module.exports = router;
  