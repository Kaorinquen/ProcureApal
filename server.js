var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = 3000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//requiring route files
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);



// Starts the server to begin listening
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App listening on PORT " + PORT);
});