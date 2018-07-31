var http=require("http");
var mysql=require("mysql");
var ejs=require("ejs");
var fs=require("fs");
var express=require("express");
var PagingManager=require("./PagingManager.js");
var app=express();
var server=http.createServer(app);

app.use(express.static(__dirname));

//글등록 
app.post("/regist", function(request, response){

});

//글 목록
app.get("/list",function(request, response){
	//console.log(request.query.currentPage);
	var pm = new PagingManager(request, 26);		
	
	fs.readFile("list.ejs","utf-8",function(error, data){
		response.writeHead(200,{"Content-Type":"text/html"});
		response.end(ejs.render(data,{pm:pm}));
	});
});

//글 삭제
app.get("/delete",function(request, response){

});

//글 수정
app.post("/edit",function(request, response){

});


server.listen(7777, function(){
	console.log("웹서버 가동중 7777....");
});