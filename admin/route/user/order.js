const { adminupdateuserorderstatusController, adminupdateuserordersignatoryController, adminuserorderdashboardController, adminretrievesingleuserorderController } = require("../../controller/user/order");
const { admin_check_token } = require("../../core/authorization");
const {
  adminretrievedashboardValidation,
  adminretrievesingleorderValidation,
  adminupdateordersignatureValidation,
  adminupdateorderstatusValidation,
} = require("../../core/validations/dashboard");

const router = require("express").Router();

//payment
router.get(
  "/order/dashboard",
  adminretrievedashboardValidation,
  admin_check_token,
  adminuserorderdashboardController
);
router.get(
  "/single/order",
  adminretrievesingleorderValidation,
  admin_check_token,
  adminretrievesingleuserorderController
);
router.post(
  "/update/order/status",
  adminupdateorderstatusValidation,
  admin_check_token,
  adminupdateuserorderstatusController
);
router.post(
  "/update/order/signatory",
  adminupdateordersignatureValidation,
  admin_check_token,
  adminupdateuserordersignatoryController
);

module.exports = router;
