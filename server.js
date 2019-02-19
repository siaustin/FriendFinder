var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var html = require("./app/routing/htmlRoutes");
app.use("/", html);

var api = require("./app/routing/apiRoutes.js");
app.use("/api", api);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});