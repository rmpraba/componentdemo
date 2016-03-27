/**
 * Created by praba on 2/10/2016.
 */

var express    = require("express");
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3307',
  user     : 'wkadmin',
  password : 'password123',
  database : 'workflowdb'
});


connection.connect(function(err){
  if(!err) {
    console.log("Database is connected ... \n\n");
  } else {
    console.log("Error connecting database ... \n\n"+err);
  }
});

app.use(express.static('app'));
app.get('/' ,function (req, res) {
  res.sendFile( "app/index.html" );
});

app.listen(4000);

