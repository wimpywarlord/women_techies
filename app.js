var express = require("express");
var bodyParser = require("body-parser");

var global_variable_for_the_form_text;

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/assests'));
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.render("home.ejs");
})

app.get("/info",function(req,res){
    res.render("form_des.ejs");
})

app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 8000 HAS STARTED");
});
