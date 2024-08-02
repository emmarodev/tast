const {
  adminupdateuserrefundstatusController,
  adminretrievesingleuserrefundController,
  adminuserrefunddashboardController,
  adminupdateuserpaymentstatusController,
  adminretrievesingleuserpaymentController,
  adminuserpaymentdashboardController,
} = require("../../controller/user/payment");
const { admin_check_token } = require("../../core/authorization");
const {
  adminretrievedashboardValidation,
  adminretrievesinglepaymentValidation,
  adminretrievesinglerefundValidation,
  adminupdaterefundstatusValidation,
  adminupdatepaymentstatusValidation,
  adminpaymentdashboardValidation,
  adminrefunddashboardValidation,
} = require("../../core/validations/dashboard");

const router = require("express").Router();

//payment
router.post(
  "/payment/dashboard",
  adminpaymentdashboardValidation,
  admin_check_token,
  adminuserpaymentdashboardController
);
router.post(
  "/single/payment",
  adminretrievesinglepaymentValidation,
  admin_check_token,
  adminretrievesingleuserpaymentController
);
router.post(
  "/update/payment/status",
  adminupdatepaymentstatusValidation,
  admin_check_token,
  adminupdateuserpaymentstatusController
);

//refund
router.post(
  "/refund/dashboard",
  adminrefunddashboardValidation,
  admin_check_token,
  adminuserrefunddashboardController
);
router.post(
  "/single/refund",
  adminretrievesinglerefundValidation,
  admin_check_token,
  adminretrievesingleuserrefundController
);
router.post(
  "/update/refund/status",
  adminupdaterefundstatusValidation,
  admin_check_token,
  adminupdateuserrefundstatusController
);

module.exports = router;
