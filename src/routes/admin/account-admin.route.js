const router = require("express").Router();

const accountAdminController = require("../../controllers/admin/account-admin.controller");

const accountAdminValidation = require("../../validations/admin/account-admin.validation");

router.get("/login", accountAdminController.login);
router.get("/register", accountAdminController.register);
router.get("/register-initial", accountAdminController.registerInitial);
router.get("/forgot-password", accountAdminController.forgotPassword);
router.get("/otp-password", accountAdminController.otpPassword);
router.get("/reset-password", accountAdminController.resetPassword);

router.post(
	"/login",
	accountAdminValidation.loginPost,
	accountAdminController.loginPost,
);

router.post(
	"/register",
	accountAdminValidation.registerPost,
	accountAdminController.registerPost,
);

module.exports = router;
