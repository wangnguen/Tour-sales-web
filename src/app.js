const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const adminRoute = require("./routes/admin/index.route");
const variableConfig = require("./config/variable");
const errorHandler = require("./middlewares/errrorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(helmet());
app.use(morgan("dev"));

// Tạo biến cho các view
app.locals.pathAdmin = variableConfig.pathAdmin;

// Biến toàn cục
global.pathAdmin = variableConfig.pathAdmin;

// static files
app.use(express.static(path.join(__dirname, "..", "public")));

// view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// routes
app.use(`/${variableConfig.pathAdmin}`, adminRoute);

// Route test lỗi
app.get("/error", (req, res, next) => {
	const err = new Error("Test error nè!");
	err.status = 400;
	next(err);
});

// catch errors
app.use(errorHandler);

module.exports = app;
