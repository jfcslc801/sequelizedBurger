// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

// Sets up the Express App
var PORT = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the app directory
app.use(express.static("public"));



// Require Express-Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
var connection = require("./config/config.json");
require("./routes/api-routes.js")(app);


//syncing our sequelize models and then starting our Export
db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});