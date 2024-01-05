
let date = new Date();

let current_Day = ['Sun','Mon','Tues','Weds','Thurs','Fri','Sat','Sun'];
let current_Month = ['Jan','Feb','Mar','June','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];

//Get Current Day, Month, Date, and year
let day = current_Day[date.getDay()];
let month = current_Month[date.getMonth()];
let current_Date = date.getDate();
let year = date.getFullYear();

function getcurrent_Time (){
//Get Current Hour,Minutes,and seconds
let time = new Date();
let hours = time.getHours();
let mintues = time.getMinutes();
let seconds = time.getSeconds();
let midday = "AM"

//Ternary operaters
midday = hours >= 12 ? "PM" :"AM";
hours = hours >= 12 ? hours - 12 : hours; //Subtracts from 24 or 12
hours = hours === 0 ? 12 : hours; //If hours = 0 convert 0 into 12
hours = hours  < 10 ? "0" + hours : hours;
mintues = mintues < 10 ? "0" + mintues : mintues;
seconds = seconds < 10 ? "0" + seconds : seconds;

let current_Time =  hours + " " + mintues + " " + seconds + " " + "<span class='ampm'>" + midday + "</span>";
document.getElementById('current_time').innerHTML = current_Time;
}
 
setInterval(getcurrent_Time, 100);
//Display the content of current_Day
document.getElementById('weekends').innerHTML = current_Day;

let today_Date = current_Month[date.getMonth()] + " " + current_Date + " " + year;
document.getElementById('today_date').innerHTML = today_Date;

console.log(day, month, current_Date, year);

