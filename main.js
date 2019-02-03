const mysql = require('mysql');
const http = require('http');
const url = require('url');
const fs = require('fs');

// this is in case you want to use your mysql database
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "your root user password"
});

//this is where we create the server and specify the different routes
http.createServer(function(req,res){
  console.log('started');
  if(req.url == '/')
  {
     res.writeHead(200,{'Content-Type':'text/html'});
     var stream = fs.createReadStream(__dirname+'/site.html','utf8');
     stream.pipe(res);
  } 
  /* you can create more routes here
     ~
     ~
     ~
     ~
     ~
  */
}).listen(3000);


