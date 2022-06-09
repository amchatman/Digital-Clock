function currentTime(){

// Get Date, Month, Time & etc
let currentDate = new Date();
let day = currentDate.getDay();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let year = currentDate.getFullYear();
let hour = currentDate.getHours();
let mintues = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let period = "AM";


//Array for Day and Months
let dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let monthNames = ['January','Feburary','March','April','May','June','July'];


let thisMonth  = monthNames[month] + " " + date + ", " + year;

if(hour >= 12){
    period = "PM";
}

//Change the format from 24 hour to 12 hour
hour = hour > 12 ? hour % 12 : hour;


//Add a 0 in from of numbers less then 10 on clock
if(mintues < 10){
    mintues = "0" + mintues;
}
if (seconds < 10){
    seconds = "0" + seconds;
}
//Time format
let thisTime = hour + " : " +  mintues + " : " + seconds + " " + period;


document.getElementById('currentDay').innerHTML = dayNames[day];
document.getElementById('currentMonth').innerHTML = thisMonth;
document.getElementById('currentTime').innerHTML = thisTime;

let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();
