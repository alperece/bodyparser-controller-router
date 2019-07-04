var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
// We add the following to be activated in JSON objects
// app.use(bodyParser.json());

// Server.js does not know Router. We have to import it.
var routeLogin = require('./app_server/routes/loginRoutes');
app.use('/',routeLogin);


app.listen(3000,function(){
    console.log("Started on port 3000");
})