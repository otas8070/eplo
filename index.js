var express = require("express");
const fs = require('fs');
const csv = require('csv');
const JSONStream = require('JSONStream');

var app = express();

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// CORSを許可する
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// View EngineにEJSを指定。
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res, next){
    res.render("index", {});
});

app.get("/emotion", function(req, res, next){
    res.render("emotion", {});
});

app.get("/emotion/fau", function(req, res, next){
    res.render("fau", {});
});

app.get("/emotion/list", function(req, res, next){
    res.render("list", {});
});

app.get("/api/graph/:csv/:frameId", function(req, res, next){
  var filename = req.params.csv;//'data_final_all_05_01_01_full.csv';
  var start = parseInt(req.params.frameId);
  var end = parseInt(start)+199;
  var list = [];
  var parser = csv.parse({columns: true});
  var readableStream = fs.createReadStream(filename, {encoding: 'utf-8'});
  //console.log(start+","+end+","+req.params.csv);
  readableStream.pipe(parser);
  parser.on('readable', () => {
    var data;
    while (data = parser.read()) {
      if(data.frame>=start && data.frame<=end){
          list.push(data);
      }
    }
  });
  parser.on('end', () => {
    //console.log(list);
    res.json(list);
  });
});



app.get("/api/anno/", function(req, res, next){
  var filename = "anno_all.csv";//'data_final_all_05_01_01_full.csv';
  var annolist = [];
  var parser = csv.parse({columns: true});
  var readableStream = fs.createReadStream(filename, {encoding: 'utf-8'});
  readableStream.pipe(parser);
  parser.on('readable', () => {
    var data;
    while (data = parser.read()) {
        annolist.push(data);
      }
  });
  parser.on('end', () => {
    res.json(annolist);
    console.log(annolist[0]["video"]);
  });
});

app.get("/api/emotion/", function(req, res, next){
  var filename = "./public/emodata/alldata.csv";//'data_final_all_05_01_01_full.csv';
  var annolist = [];
  var parser = csv.parse({columns: true});
  var readableStream = fs.createReadStream(filename, {encoding: 'utf-8'});
  readableStream.pipe(parser);
  parser.on('readable', () => {
    var data;
    while (data = parser.read()) {
        annolist.push(data);
      }
  });
  parser.on('end', () => {
    res.json(annolist);
    console.log(annolist[0]["FaceAction"]);
  });
});

app.get("/api/emograph/:csv/:startframe/:endframe", function(req, res, next){
  var filename = "./public/emodata/"+req.params.csv;  //'#33.csv';
  var start = parseInt(req.params.startframe);
  var end = parseInt(req.params.endframe);
  var list = [];
  var parser = csv.parse({columns: true});
  var readableStream = fs.createReadStream(filename, {encoding: 'utf-8'});
  //console.log(start+","+end+","+req.params.csv);
  readableStream.pipe(parser);
  parser.on('readable', () => {
    var data;
    while (data = parser.read()) {
      if(data.frame>=start && data.frame<=end){
          list.push(data);
      }
    }
  });
  parser.on('end', () => {
    //console.log(list);
    res.json(list);
  });
});

app.get("/api/cross/:human1/:human2/:start1/:start2/:end1/:end2/:title", function(req, res, next){
  var filename = "./public/emodata/history.csv";  //'#33.csv';
  var human1 = parseInt(req.params.human1);
  var human2 = parseInt(req.params.human2);
  var start1 = parseInt(req.params.start1);
  var end1 = parseInt(req.params.end1);
  var start2 = parseInt(req.params.start2);
  var end2 = parseInt(req.params.end2);
  var title = req.params.title;
  var date = new Date() ;
  var id = date.getTime() ;
  var list = [];

  var data = id+","+human1+","+human2+","+start1+","+start2+","+end1+","+end2+"," +title+"\n";

  fs.appendFile(filename, data, function (err) {
    if (err) {
        throw err;
    }
    else{
      res.send('Hello World!');
    }
  });
});

app.get("/api/cross-hist/", function(req, res, next){
  var filename = "./public/emodata/history.csv";
  var annolist = [];
  var parser = csv.parse({columns: true});
  var readableStream = fs.createReadStream(filename, {encoding: 'utf-8'});
  readableStream.pipe(parser);
  parser.on('readable', () => {
    var data;
    while (data = parser.read()) {
        annolist.push(data);
      }
  });
  parser.on('end', () => {
    res.json(annolist);
  });
});
