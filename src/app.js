const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const adminRoute = require("./routes/admin/index.route");
const variableConfig = require("./config/variable");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(helmet());
app.use(morgan("dev"));

// static files
app.use(express.static(path.join(__dirname, "..", "public")));

// view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// routes
app.use(`/${variableConfig.pathAdmin}`, adminRoute);

// catch errors

module.exports = app;
