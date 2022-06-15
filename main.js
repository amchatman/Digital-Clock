//Get current Day, Month, Date and Year
var currentDate = new Date();
var day = currentDate.getDay();
var month = currentDate.getMonth();
var date = currentDate.getDate();
var year = currentDate.getFullYear();

//Array stores days of the week and months
const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthNames = ['January','Feburary','March','April','May','June','July'];

//Sets the date format as: Month Day, Year
const thisMonth  = monthNames[month] + " " + date + ", " + year;

//Display day and month
document.getElementById('currentDay').innerHTML = dayNames[day];
document.getElementById('currentMonth').innerHTML = thisMonth;

//Function that gets the current time and switchs from the 24 hour clock to 12 hour
var twentyFourHour = false,
thisTime = document.getElementById("currentTime"),
changeButton = document.getElementById("changeFormat");

var chanageTime = function (){
     var currentDate = new Date(),
     hours = currentDate.getHours(),
     mintues = currentDate.getMinutes(),
     seconds = currentDate.getSeconds();

    if (twentyFourHour){
        var period = hours >= 12 ? "PM" : "AM";
        zero = seconds < 10 ? "0": " ",
        zeroMin = mintues < 10 ? "0": " ";
        
        thisTime.innerText = hours + " : " + zeroMin + mintues + " : " + zero + seconds + " " + period; 
        
    }
    else {
        var period = hours >= 12 ? "PM" : "AM",
            twevleHour = hours % 12;
        var zero = seconds < 10 ? "0": " ",
        zeroMin = mintues < 10 ? "0": " ";

        thisTime.innerText = twevleHour + " : "+ zeroMin + mintues + " : " + zero + seconds + " " + period;
    }

}; 

var changeFormat = function() {
    twentyFourHour = !twentyFourHour;
};

const lightbtn = document.querySelector('.light-mode-icon');
lightbtn.addEventListener("click", function() { 
    document.body.classList.toggle("light-theme");
  });
 

changeButton.addEventListener("click", changeFormat);
window.setInterval(chanageTime, 100);