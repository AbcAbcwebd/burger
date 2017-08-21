const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();
//app.set('port', process.env.PORT || process.argv[2] || 80);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


// Override with POST having ?_method=DELETE/PUT
app.use(methodOverride("_method"));

// Set Handlebars.
const hbs = require("express-handlebars");

app.engine("hbs", hbs({ defaultLayout: "main", extname: 'hbs' }));
app.set("view engine", "hbs");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
//app.listen(app.get('port'),function(){console.log('its working...')} );

var server = app.listen(process.env.PORT || '8080', function(){
  console.log('App listening on Port %s', server.address().port);
  console.log('Press Ctrl+C to quit');
});

console.log("Server running");