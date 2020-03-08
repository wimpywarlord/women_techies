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

app.get("/offer_letter_of_employment_form_fill",function(req,res){
	res.render("offer_letter_of_employment_form_fill.ejs");
})

app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 8000 HAS STARTED");
});
