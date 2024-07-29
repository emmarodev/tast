const {
  usercreateordercontroller,
  userorderdashboardController,
  userretrievesingleorderController,
} = require("../controller/order");
const {
  userpaymentdashboardController,
  usercreatepaymentcontroller,
  userrefunddashboardController,
  usercreaterefundcontroller,
  userretrievesinglerefundController,
  userretrievesinglepaymentController,
} = require("../controller/refund_payment");
const { user_check_token } = require("../core/authorization");
const {
    userorderdashboardValidation,
    usercreateorderValidation,
    usercreaterefundValidation,
    usercreatepaymentValidation,
    userretrievesinglerefundValidation,
    userretrievesinglepaymentValidation,
    usersingleorderValidation,
} = require("../core/validations/order");

const router = require("express").Router();

router.get(
  "/order/dashboard/:userid",
  userorderdashboardValidation,
  user_check_token,
  userorderdashboardController
);
router.post(
  "/create/order",
  usercreateorderValidation,
  user_check_token,
  usercreateordercontroller
);
router.get(
  "/retrieve/single/order/:userid/:orderid",
  usersingleorderValidation,
  user_check_token,
  userretrievesingleorderController
);

//refund
router.get(
  "/refund/dashboard/:userid",
  userorderdashboardValidation,
  user_check_token,
  userrefunddashboardController
);

router.post(
  "/create/refund",
  usercreaterefundValidation,
  user_check_token,
  usercreaterefundcontroller
);
router.get(
  "/retrieve/single/refund/:userid/:refundid",
  userretrievesinglerefundValidation,
  user_check_token,
  userretrievesinglerefundController
);

//payment
router.get(
  "/payment/dashboard/:userid",
  userorderdashboardValidation,
  user_check_token,
  userpaymentdashboardController
);
router.post(
  "/create/payment",
  usercreatepaymentValidation,
  user_check_token,
  usercreatepaymentcontroller
);
router.get(
  "/retrieve/single/payment/:userid/:paymentid",
  userretrievesinglepaymentValidation,
  user_check_token,
  userretrievesinglepaymentController
);

module.exports = router;
