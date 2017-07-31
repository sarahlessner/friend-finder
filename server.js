var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express()
var PORT = process.env.PORT || 3002;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

console.log(__dirname);
require('./app/routing/apiroutes.js')(app);
require('./app/routing/htmlroutes.js')(app);
// require(path.join(__dirname + '/app/routing/apiRoutes.js'))(app);
// require(path.join(__dirname + '/app/routing/htmlRoutes.js'))(app);



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});