
const {
  admincreatepaymentController,
  adminupdatepaymentController,
  admindeletepaymentController,
  adminretrievepaymentController,
} = require("../../controller/media/payment");
const { admin_check_token } = require("../../core/authorization");
const { adminValidation } = require("../../core/validations/auth");
const { admincreatepaymentValidation ,   admindeletepaymentValidation,
    adminupdatepaymentValidation, } = require("../../core/validations/media/payment");

const router = require("express").Router();

router.post(
  "/create/payment",
  admincreatepaymentValidation,
  admin_check_token,
  admincreatepaymentController
);
router.post(
  "/update/payment",
  adminupdatepaymentValidation,
  admin_check_token,
  adminupdatepaymentController
);
router.post(
  "/delete/payment",
  admindeletepaymentValidation,
  admin_check_token,
  admindeletepaymentController
);
router.get(
  "/retrieve/all/payment/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievepaymentController
);

module.exports = router;
