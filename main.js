const mysql = require('mysql');
const http = require('http');
const url = require('url');
const fs = require('fs');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "rl!ta4Ori"
});
con.query("use test",function(err,result){});


http.createServer(function(req,res){
  console.log('started');
  if(req.url == '/')
  {
     res.writeHead(200,{'Content-Type':'text/html'});
     var stream = fs.createReadStream(__dirname+'/site.html','utf8');
     stream.pipe(res);
  } 
  if(url.parse(req.url,true).query.name)
  {
    console.log('url matched');
    var name = url.parse(req.url,true).query.name;
    console.log('name :'+name);
    var sql = `select status from oofficer where name='${name}'`;
    console.log('query: '+sql);
    con.query(sql,(err,result)=>{
      if(err){
        return console.error(err.message);
      }
      res.writeHead(200,{'Content-Type':'application/json'});
      res.end(JSON.stringify(result));
    });
  }
}).listen(3000);


