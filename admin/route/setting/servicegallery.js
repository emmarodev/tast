const {
    admincreateservicegalleryController,
    adminupdateservicegalleryController,
    admindeleteservicegalleryController,
    adminretrieveservicegalleryController,
  } = require("../../controller/setting/servicegallery");
  const { admin_check_token } = require("../../core/authorization");
  const { adminValidation } = require("../../core/validations/auth");
  const {
    admindeleteservicegalleryValidation,
    adminupdateservicegalleryValidation,
    admincreateservicegalleryValidation,
  } = require("../../core/validations/setting.js/servicegallery");
  
  const router = require("express").Router();
  
  router.post(
    "/create/servicegallery",
    admincreateservicegalleryValidation,
    admin_check_token,
    admincreateservicegalleryController
  );
  router.post(
    "/update/servicegallery",
    adminupdateservicegalleryValidation,
    admin_check_token,
    adminupdateservicegalleryController
  );
  router.post(
    "/delete/servicegallery",
    admindeleteservicegalleryValidation,
    admin_check_token,
    admindeleteservicegalleryController
  );
  router.get(
    "/retrieve/servicegallery/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveservicegalleryController
  );
  
  module.exports = router;
  