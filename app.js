const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const { json } = require('body-parser');
const app = express();

const api = "1107ebd4a3bcfbd569406dc4808e83cb";
const q = "";

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(){
    res.sendFile(__dirname+"/index.html");
})

app.get("/weatherdata",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=1107ebd4a3bcfbd569406dc4808e83cb&units=metric";
    https.get(url,function(response){
        response.on("data",function(d){
            const weather = JSON.parse(d);
            let temp = weather.main.temp;
            let description = weather.weather[0].description;
            let icon = weather.weather[0].icon;
            console.log("temperature is "+temp+" description:"+description+" icon:"+icon);
        })
    })
})

app.listen(3000,function(){
    console.log("server started at port 3000");
})
