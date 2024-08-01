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
} = require("../../core/validations/dashboard");

const router = require("express").Router();

//payment
router.get(
  "/payment/dashboard",
  adminretrievedashboardValidation,
  admin_check_token,
  adminuserpaymentdashboardController
);
router.get(
  "/single/payment",
  adminretrievesinglepaymentValidation,
  admin_check_token,
  adminretrievesingleuserpaymentController
);
router.post(
  "/update/single/status",
  adminupdatepaymentstatusValidation,
  admin_check_token,
  adminupdateuserpaymentstatusController
);

//refund
router.get(
  "/refund/dashboard",
  adminretrievedashboardValidation,
  admin_check_token,
  adminuserrefunddashboardController
);
router.get(
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
