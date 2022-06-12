var currentDate = new Date();
var day = currentDate.getDay();
var month = currentDate.getMonth();
var date = currentDate.getDate();
var year = currentDate.getFullYear();


let dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let monthNames = ['January','Feburary','March','April','May','June','July'];
let thisMonth  = monthNames[month] + " " + date + ", " + year;

document.getElementById('currentDay').innerHTML = dayNames[day];
document.getElementById('currentMonth').innerHTML = thisMonth;

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

changeButton.addEventListener("click", changeFormat);
window.setInterval(chanageTime, 100);