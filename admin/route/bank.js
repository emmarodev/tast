const { adminretrievebankController, admincreatebankController, adminupdatebankController, admindeletebankController, adminchangebankstatusController } = require("../controller/bank");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validations/auth");
const { admincreatebankValidation, adminupdatebankValidation, admindeletebankValidation, adminchnagebankstatusValidation } = require("../core/validations/bank");



const router = require("express").Router();

router.post("/create/bank",  admincreatebankValidation, admin_check_token, admincreatebankController);
router.post("/update/bank",  adminupdatebankValidation, admin_check_token,  adminupdatebankController);
router.post("/delete/bank",  admindeletebankValidation, admin_check_token,  admindeletebankController);
router.post("/update/bank/status",   adminchnagebankstatusValidation, admin_check_token,  adminchangebankstatusController);
router.get("/retrieve/bank",  adminValidation, admin_check_token,   adminretrievebankController);


module.exports = router