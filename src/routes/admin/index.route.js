const router = require("express").Router();

const dashboardRoute = require("./dashboard.route");

router.use("/dashboard", dashboardRoute);

module.exports = router;
