// JavaScript Document
var text2display ="";
var answers = new Array(8);
	answers[0] = "1.Clinton\n";
	answers[1] = "2.Kerry\n";
	answers[2] = "3.United Nations\n";
	answers[3] = "4.Dmitry Medvedev\n";
	answers[4] = "5.Vatican\n";
	answers[5] = "6.Kobe Bryant\n";
	answers[6] = "7.Cuba\n";
	answers[7] = "8.Three\n";
	
var questions = new Array(8);
	questions[0] ="q1";
	questions[1] ="q2";
	questions[2] ="q3";
	questions[3] ="q4";
	questions[4] ="q5";
	questions[5] ="q6";
	questions[6] ="q7";
	questions[7] ="q8";
	
function checkQs (s)
{
	"use strict";
	var qs= document.getElementsByName(s);
	var noOfRadios = qs.length;
	
	for(var i = 0; i < noOfRadios; i++)	
	{
		if(qs[i].checked)
		{
			if(qs[i].value==="correct")
				text2display = text2display + "You are Correct\n";
			else text2display = text2display + answers [questions.indexOf(s)];
				break; 
		}	
	}
}

function checkAll()
{
	"use strict";
	for(var i = 0; i < questions.length; i++)
	{
		checkQs(questions[i]);
	}
	quiz.answersBox.value=text2display;
}


