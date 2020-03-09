var express = require("express");
var bodyParser = require("body-parser");
var fs=require('fs');
var deepai=require('deepai');

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');
var resp;
async function asyncall() {
    resp = await deepai.callStandardApi("summarization", {
            text: fs.createReadStream("proxies.txt"),
    });
	console.log(resp);
	
}

asyncall();
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

app.get("/offer_letter",function(req,res){
	res.render("offer_letter.ejs",{summary:resp});
})

app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 8000 HAS STARTED");
});
