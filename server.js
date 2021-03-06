// set up ======================================================================
var express    = require('express');
var app        = express();                       // create our app w/ express
var port       = process.env.PORT || 3000;        // set the port
var bodyParser = require('body-parser');          // pull information from HTML POST (express4)

// configuration ===============================================================
app.use(express.static(__dirname + '/public'));         // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                             // parse application/json

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
