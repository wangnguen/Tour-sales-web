const router = require("express").Router();

const accountAdminController = require("../../controllers/admin/account-admin.controller");

router.get("/login", accountAdminController.login);
router.get("/register", accountAdminController.register);
router.get("/register-initial", accountAdminController.registerInitial);
router.get("/forgot-password", accountAdminController.forgotPassword);
router.get("/otp-password", accountAdminController.otpPassword);
router.get("/reset-password", accountAdminController.resetPassword);

module.exports = router;
