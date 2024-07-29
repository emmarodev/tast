const {
  adminretrievealluserorderdashboardController,
  adminretrievealluserpaymentdashboardController,
  adminretrievealluserrefunddashboardController,
  adminretrievealluserdashboardController,
  adminretrievesingleuserController,
  admindeleteuseraccountController,
} = require("../../controller/user/user.mgn");
const { admin_check_token } = require("../../core/authorization");
const { adminValidation } = require("../../core/validations/auth");
const {
  adminuserdashboardValidation,
} = require("../../core/validations/dashboard");

const router = require("express").Router();


  //order dashbaord
  router.get(
    "/all/user/dashboard",
    adminuserdashboardValidation,
    admin_check_token,
    adminretrievealluserdashboardController
  );
router.get(
  "/single/user/dashboard",
  adminuserdashboardValidation,
  admin_check_token,
  adminretrievesingleuserController
);
router.get(
  "/user/order/dashboard",
  adminuserdashboardValidation,
  admin_check_token,
  adminretrievealluserorderdashboardController
);
router.get(
  "/user/payment/dashboard",
  adminuserdashboardValidation,
  admin_check_token,
  adminretrievealluserpaymentdashboardController
);
router.get(
  "/user/refund/dashboard",
  adminuserdashboardValidation,
  admin_check_token,
  adminretrievealluserrefunddashboardController
);
router.delete(
  "/delete/account",
  adminuserdashboardValidation,
  admin_check_token,
  admindeleteuseraccountController
);

module.exports = router;
