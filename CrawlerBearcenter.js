var request = require("request");
var cheerio = require("cheerio");


var url = "https://bearcenter.berkeley.edu/";

// 取得網頁資料
request(url, function (error, response, body) {
  if (!error) {

	// 用 cheerio 解析 html 資料
	var $ = cheerio.load(body);
	// 篩選有興趣的資料
	var data1= $("ul#main-menu").html();
	//var data1= $("div.row-fluid >header >h1").html();
	//var data2= $("div.row-fluid >header >p").html();
	// 輸出
	console.log(data1);

  } else {
	console.log("擷取錯誤：" + error);
  }
});
**************************************************************************************

var request = require('request');
var cheerio = require('cheerio');


var url = 'https://bearcenter.berkeley.edu/';
	
	
    request(url, function(err, res, body){
        var $ = cheerio.load(body);

	/*	var T1 = $(" div.span6 > h1 ").html();
		var T1C = $(" div.span6 > P ").html();
		console.log(T1);
		console.log(T1C);		
    */ 

		//[Featured Projects, News & Events] Title
		var P2MT = [];
		$("div.row-fluid>header>h1 ").each(function(){
			P2MT.push($(this).text());
		}).html();	
		//[Our Software, Recent Publications] Title
		var P3MT = [];
		$("div.row-fluid>div.content-col.span6>header>h1 ").each(function(){
			P3MT.push($(this).text());
		}).html();			
		
		// Featured Projects Subtitle & Content
		
			var P2T = [];
			$("div.row-fluid>div.thumb-summaries>div.thumb-summary.row-fluid>div.summary.span9>h2>a ").each(function(){
				P2T.push($(this).text());
			}).html(); //Our Software
			
			var P2C = [];
			$("div.row-fluid>div.thumb-summaries>div.thumb-summary.row-fluid>div.summary.span9>p ").each(function(){
				P2C.push($(this).text());
			}).html();		
		
		//	console.log(P2MT);
			
		// Our Software Content
			var P3C = $("  div.row-fluid> >header>P ").html();
		// Our Recent Publications Content
			var P4T = [];
			$("div.row-fluid>div.content-col.span6>ul>li>p ").each(function(){
				P4T.push($(this).text());
			}).html();		
			var P4C = [];
			$("div.row-fluid>div.content-col.span6>ul>li>ul>li ").each(function(){
				P4C.push($(this).text());
			}).html();	
			console.log(P4T);
			console.log(P4C);
		//News & Events Content

			var P5time =[];
			$("div.row-fluid>ul.event-list>li.row-fluid>div.event-date.span3>time ").each(function(){
				P5time.push($(this).text());
			}).html();	
			var P5T =[];
			$("div.row-fluid>ul.event-list>li.row-fluid>div.event-summary.span9>h2>a ").each(function(){
				P5T.push($(this).text());
			}).html();			
			
			
			//console.log(P5T);
	});


	
	div.row-fluid>div.thumb-summaries>div.thumb-summary.row-fluid>
section#featured-projects.summary-section >