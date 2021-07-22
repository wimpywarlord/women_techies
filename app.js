var express = require("express");
var bodyParser = require("body-parser");
var fs=require('fs');



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

// var unirest = require("unirest");

// var req = unirest("POST", "https://textanalysis-keyword-extraction-v1.p.rapidapi.com/keyword-extractor-text");

// req.headers({
// 	"x-rapidapi-host": "textanalysis-keyword-extraction-v1.p.rapidapi.com",
// 	"x-rapidapi-key": "7703ef81e0mshd5555ce8567e172p148f04jsn2f562e2f9571",
// 	"content-type": "application/x-www-form-urlencoded"
// });

// req.form({
// 	"text": "____ (NAME)"
// 	+"____"
	
// 	+"____ (DATE)"
	
// 	+"____ (EMAIL)"
	
// 	+"To _____(COMPANY),"
// 	+"I am formally requesting you to give me _____(NO OF DAYS) days leave of absence."
// 	+"I have finished almost all the projects assigned to me with only one remaining which I have given to my assistant to take care of it since he is as experienced just as I am in handling that remaining project. "
	
	
// 	+"Thank you for your consideration." 
	
// 	+"Yours Sincerely," 
// 	+"______(NAME)",
// 	"wordnum": "5"
// });
// var a,b;
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	var keywords_arr = ["name","date of leave","company name","email"];
// 	res.body.keywords =  (res.body.keywords).concat(keywords_arr);
// 	console.log(res.body);
// 	var questionable = require('questionable');
// questionable("employee name", function (err, titles) {
//   if (err) throw err;
//   //console.log(titles);
//   console.log(titles)
 
// 	});
// questionable("company name", function (err, titles) {
//   if (err) throw err;
//   //console.log(titles);
  
//   console.log(titles);
 
// 	});
// 	questionable("date of leave", function (err, titles) {
// 		if (err) throw err;
// 		//console.log(titles);
		
// 		console.log(titles);
	
// 		  });
// 		  questionable("email", function (err, titles) {
// 			if (err) throw err;
// 			//console.log(titles);
			
// 			console.log(titles);
		
// 			  });
// });

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

// var unirest = require("unirest");

// var req = unirest("POST", "https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer-text");

// req.headers({
// 	"content-type": "application/x-www-form-urlencoded",
// 	"x-rapidapi-key": "7703ef81e0mshd5555ce8567e172p148f04jsn2f562e2f9571",
// 	"x-rapidapi-host": "textanalysis-text-summarization.p.rapidapi.com",
// 	"useQueryString": true
// });

// req.form({
// 	"text": `Re: Offer of Employment


// 	I am delighted to offer you employment on a full-time basis in the role of ________. It is intended for you to commence your employment on ________ ("Commencement Date").
	
// 	Please read through this letter carefully and indicate your acceptance of the offer by signing and returning a copy of this letter.
	
// 	1. Your Position
// 	You will be employed on the terms and conditions in this agreement, in the role of: ________
	
// 	2. Location
// 	You will be based at the address shown below, although we may direct you to work at different locations from time to time:
// 	________.
	
	
	
// 	3. Probationary Period
// 	Your employment is subject to the satisfactory completion of a probationary period of one month.
// 	The probationary period is designed to grant the Employer time to assess whether you are able to fulfill your role with the Employer. During the probationary period your employment may be terminated by either you or the Employer upon providing 1 week written notice (or payment in lieu of that notice).
	
	
// 	4. Hours of Work
// 	(a) As a full-time employee you will be required to devote substantially the whole of your time and attention during the Employer's ordinary business hours to the performance of your duties under this agreement.
// 	(b) You will not be entitled to receive any remuneration for work performed outside of the hours referred to in sub-clause (a) above.
	
// 	5. Salary and Benefits
// 	(a) Your annual salary will be Rs. ________ .
// 	(b) This salary will be paid by weekly in the following manner:  deposit into nominated account.
// 	(c) The above mentioned salary is the total cost to the company and includes all payments made and benefits provided by the Employer directly or indirectly to or on your behalf, whether as salary or otherwise.
	
// 	6. Leave
// 	(a) You will be entitled to annual and long service leave in accordance with the applicable laws and the leave policy of the company.
	
// 	7. Company Policies
// 	You agree that the Employer's policies, as amended or replaced from time to time, shall be binding upon you but shall not form part of the employment contract.
	
// 	8. Confidentiality and Intellectual Property
// 	(a) You agree that you will not divulge any of the confidential information or trade secrets of the Employer to any person, whether during or after the termination of your employment.
// 	(b) You agree that you will not divulge any of the confidential information or trade secrets of the Employer to any person, whether during or after the termination of your employment.
	
// 	9. Termination
// 	(a) During your employment, either party may terminate this agreement by providing written notice of 3 months (or payment in lieu of notice) to the other party.
// 	(b) Notwithstanding sub-clause (a) above, the Employer may terminate this agreement by notice effective immediately without payment (except salary accrued to the date of termination) where you have committed an act of wilful or serious misconduct, are significantly neglectful of your duties, or you are in breach of this agreement.
	
// 	Acceptance
// 	This Letter of Offer contains the proposed Terms and Conditions of your employment with the Employer and is subject to the preparation and execution of a formal Contract of Employment.
	
// 	Yours sincerely,
	
	
// 	________
// 	________
	
	
	
	
	
	
	
// 	I, ________ , accept and agree to the proposed terms of employment and request that the Employer prepare a formal contract of employment for execution.
	
	
// 	________________________
// 	Date`,
// 	"sentnum": "5"
// });

// var final;
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	final = res.body
// 	console.log(res.body);
// });

// Example directly sending a text string:


app.get("/offer_letter", function (req, res) {
	// Example directly sending a text string:
	res.render("offer_letter.ejs",{summary:"You have signed a agreement which accepts a job/employment offer from the company, and renders you liable to work under their fore mentioned jurisdictions. This contract also grants you health and economic privilege against your service."});	
})

app.get("/autoform",function(req,res){
	res.render("autoform.ejs",{questions:questions});
})

app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 8000 HAS STARTED");
});