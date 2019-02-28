let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
var bodyParser = require("body-parser");

let bodyparser = require("body-parser");

// middleware
var auth_error = require("./utils/error_handle");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", auth_error, require("./routes/api/index"));
app.use("/login", require("./routes/login/index"));

module.exports = app;
