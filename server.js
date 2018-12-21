'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var cors = require('cors');
var urlHandler = require('./urlHandler.js');
var app = express();

//install testing module available at narrow-plane.glitch.me
app.use(cors());

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.MONGOLAB_URI);
//Install & Set up mongoose
mongoose.connect(process.env.MONGO_URI)

//create SCHEMAS and MODELS for the DB
/*1. create separate files w


/** this project needs to parse POST bodies **/
// you should mount the body-parser here
app.use(bodyParser.urlencoded({extended: false}))



//visualize 
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint, just to test (not needed for the project)
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// create file to handle data and require it at the top 

//get and post data to the DB
app.post('/api/shorturl/new', urlHandler.addUrl);
 // retrieve data from the DB and use it
app.get('/api/shorturl/:shurl', urlHandler.processShortUrl);


/*app.route("/api/shorturl/new").post((req,res)=>
  var output={};
//if dns used require it at the top
  dns.lookup(req.body.url.slice(8), (err, address, family) =>{
  output={original_url: req.body.url} //: output={error:"Invalid URL"}
    //if (err)console.log(err); /*return res.send({error:"Invalid URL"});//
  console.log('address: %j family: IPv%s', address, family);
  console.log(req.body)
  console.log(err)
  //console.log(req.body);
  res.send(output);
    
  });
  
  (err,data)=>
  res.redirect(req.body.url);
});*/



app.listen(port, function () {
  console.log('Node.js listening ...');
});