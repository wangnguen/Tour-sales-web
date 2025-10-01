const router = require("express").Router();

const dashboardRoute = require("./dashboard.route");
const accountAdmindRoute = require("./account-admin.route");

router.use("/dashboard", dashboardRoute);
router.use("/account-admin", accountAdmindRoute);

module.exports = router;
