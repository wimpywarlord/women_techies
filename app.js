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






////

var express = require("express");
var bodyParser = require("body-parser");




var global_variable_for_the_form_text;

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/assests'));
app.use(express.static(__dirname + '/public'));

var unirest = require("unirest");

var req = unirest("POST", "https://textanalysis-keyword-extraction-v1.p.rapidapi.com/keyword-extractor-text");

req.headers({
	"x-rapidapi-host": "textanalysis-keyword-extraction-v1.p.rapidapi.com",
	"x-rapidapi-key": "7703ef81e0mshd5555ce8567e172p148f04jsn2f562e2f9571",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({
	"text": "____ (NAME)"
	+"____"
	
	+"____ (DATE)"
	
	+"____ (EMAIL)"
	
	+"To _____(COMPANY),"
	+"I am formally requesting you to give me _____(NO OF DAYS) days leave of absence."
	+"I have finished almost all the projects assigned to me with only one remaining which I have given to my assistant to take care of it since he is as experienced just as I am in handling that remaining project. "
	
	
	+"Thank you for your consideration." 
	
	+"Yours Sincerely," 
	+"______(NAME)",
	"wordnum": "5"
});
var a,b;
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	var keywords_arr = ["name","date of leave","company name","email"];
	res.body.keywords =  (res.body.keywords).concat(keywords_arr);
	console.log(res.body);
	var questionable = require('questionable');
questionable("employee name", function (err, titles) {
  if (err) throw err;
  //console.log(titles);
  console.log(titles)
 
	});
questionable("company name", function (err, titles) {
  if (err) throw err;
  //console.log(titles);
  
  console.log(titles);
 
	});
	questionable("date of leave", function (err, titles) {
		if (err) throw err;
		//console.log(titles);
		
		console.log(titles);
	
		  });
		  questionable("email", function (err, titles) {
			if (err) throw err;
			//console.log(titles);
			
			console.log(titles);
		
			  });
});

app.get("/",function(req,res){
	res.render("home.ejs");
})


var questions={
	"q" : [
	"what is the name of your name?",
	"what is the name of your company?",
	"what is your name?",
	"what is the date of application of leave?"
]
}


app.get("/intake",function(req,res){
	res.render("intake.ejs");
})

app.get("/info",function(req,res){
    res.render("form_des.ejs");
})

app.get("/offer_letter",function(req,res){
	res.render("offer_letter.ejs",{summary:resp.output});
})

app.get("/autoform",function(req,res){
	res.render("autoform.ejs",{questions:questions});
})

app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 8000 HAS STARTED");
});