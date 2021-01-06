var d = new Date();
var hours = d.getHours();

if (hours>6 && hours<19) {
    document.body.style.background = "linear-gradient(30deg,#F22F1D 30%,#F2F2F2 30%)";
    document.body.style.color = "#d9d9d9";
    document.querySelector(".container").style.backgroundColor = "rgba(0,0,0,0.7)";
    document.querySelector(".searchbox").style.backgroundColor = "rgba(0,0,0,0.7)";
    if(hours>=6 && hours<=14)
    {
        document.querySelector(".cover").style.backgroundImage = "url('images/morning.jpg')";
        document.body.style.color = "white";
    }
    else if(hours>14 && hours<=16){
        document.querySelector(".cover").style.backgroundImage = "url('images/afternoon.jpg')";
    }
    else{
        document.querySelector(".cover").style.backgroundImage = "url('images/evening.jpg')";
        document.body.style.color = "white";
    } 
} else {
    document.querySelector(".cover").style.backgroundImage = "url('images/night.jpg')";
    document.body.style.backgroundColor = " #3b3c40";
    document.body.style,color = "#d9d9d9";
    document.querySelector(".container").style.backgroundColor = "rgba(255, 255, 255,0.1)";
}


