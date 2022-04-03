var http = require("http");
var url = require('url');
var fs=require('fs');
var position = 5970;
var file_path = 'product.json';
const bodyParser = require('body-parser')

// http.createServer(function (request, response) {
 
//    response.writeHead(200, {'Content-Type': 'text/plain'});/// this is the response header that you want to return content type it can be text/plain or 
//    response.write(request.url);
//    var q = url.parse(request.url, true).query;
//    var txt = q.value + " " + q.id;
//    response.end("   "+txt);

//    // response.end('    Hello World\n');
// }).listen(9090);

// console.log('Server running at http://127.0.0.1:9090/');

var express = require('express');
var app = express();

var fs = require("fs");
const { text } = require("express");
var newp={
   "id": 12,
   "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
   "price": 109,
   "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
   "category": "electronics",
   "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
   "rating": {
       "rate": 4.8,
       "count": 319
   }
};
var textOut1 = JSON.stringify ( newp );

app.get('/data', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*")
   fs.readFile( "product.json", 'utf8', function (err, data) {
      if(err)return console.log(err);
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(9090, function () {
   console.log("server starts runing");
})

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.post('/add', function (req, res) {
   // res.header("Access-Control-Allow-Origin", "*")
   var textOut1= JSON.stringify ( req.body );
   console.log(req.body);
   fs.readFile(file_path, function read(err, data) {
   if (err) {
       throw err;
   }
   var file_content = data.toString();
   file_content = file_content.substring(position);
   var file = fs.openSync(file_path,'r+');
   var bufferedText = new Buffer( ','+textOut1+file_content);
   fs.writeSync(file, bufferedText, 0, bufferedText.length,position);
});

res.end( JSON.stringify(data));


// console.log("insidefunc",bodyParser.json());
})


// app.post('/addTry', function(req, res){
//    console.log(req.body);
//    res.send("done ");
// });
