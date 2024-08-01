const {
    admincreatecompanyController,
    adminupdatecompanyController,
    admindeletecompanyController,
    adminretrievecompanyController,
  } = require("../../controller/footer/company");
  const { admin_check_token } = require("../../core/authorization");
  const { adminValidation } = require("../../core/validations/auth");
  const {
    admincreatecompanyValidation,
    admindeletecompanyValidation,
    adminupdatecompanyValidation,
  } = require("../../core/validations/footer/company");
  const router = require("express").Router();
  
  router.post(
    "/create/company",
    admincreatecompanyValidation,
    admin_check_token,
    admincreatecompanyController
  );
  router.post(
    "/update/company",
    adminupdatecompanyValidation,
    admin_check_token,
    adminupdatecompanyController
  );
  router.post(
    "/delete/company",
    admindeletecompanyValidation,
    admin_check_token,
    admindeletecompanyController
  );
  router.get(
    "/retrieve/all/company/:adminid",
    adminValidation,
    admin_check_token,
    adminretrievecompanyController
  );
  
  module.exports = router;
  