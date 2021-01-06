const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

const api = require(__dirname+"/config.js");
var q = "Verkhoyansk,Russia";
var t = -12;
var des = "Cloudy";
var query = "Verkhoyansk,Russia";

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');


app.post("/",function(req,res){
    const query = req.body.query;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+api+"&units=metric";
    https.get(url,function(response){
      response.on('data',function(data)
      {
          const weather = JSON.parse(data);
           const temp = weather.main.temp;
           const country = weather.name+","+weather.sys.country; 
           const description =  "Filled With "+weather.weather[0].main;
           res.render('index',{city: country, t: temp,des: description});
      })
  })    
})

app.get("/",function(req,res){
    res.render('index',{city: q, t: t,des: des});
})

app.listen(3000,function(){
    console.log("server started at port 3000");
})

