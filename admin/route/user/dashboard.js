const { adminmonthlypatrackController } = require("../../controller/dashboard");
const {
  adminretrievealluserorderdashboardController,
  adminretrievealluserpaymentdashboardController,
  adminretrievealluserrefunddashboardController,
  adminretrievealluserdashboardController,
  adminretrievesingleuserController,
  admindeleteuseraccountController,
  adminupdateuserstatusController,
} = require("../../controller/user/user.mgn");
const { admin_check_token } = require("../../core/authorization");
const { adminValidation } = require("../../core/validations/auth");
const {
  adminuserdashboardValidation,
  adminretrievedashboardValidation,
  adminupdateuserstatusValidation,
  adminmonthlypaytrackValidation,
} = require("../../core/validations/dashboard");

const router = require("express").Router();

//order dashbaord
router.post(
  "/all/user/dashboard",
  adminretrievedashboardValidation,
  admin_check_token,
  adminretrievealluserdashboardController
);
router.post(
  "/single/user/dashboard",
  adminuserdashboardValidation,
  admin_check_token,
  adminretrievesingleuserController
);
router.post(
  "/update/user/status",
  adminupdateuserstatusValidation,
  admin_check_token,
  adminupdateuserstatusController
);
router.post(
  "/user/order/dashboard",
  adminuserdashboardValidation,
  admin_check_token,
  adminretrievealluserorderdashboardController
);
router.post(
  "/user/payment/dashboard",
  adminuserdashboardValidation,
  admin_check_token,
  adminretrievealluserpaymentdashboardController
);
router.post(
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


router.post(
  "/monthly/paytrack",
  adminmonthlypaytrackValidation,
  admin_check_token,
  adminmonthlypatrackController
);

module.exports = router;
