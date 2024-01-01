
let date = new Date();

let current_Day = ['Sun','Mon','Tues','Weds','Thurs','Fri','Sat','Sun'];
let current_Month = ['Jan','Feb','Mar','June','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];

let day = current_Day[date.getDay()];
let month = current_Month[date.getMonth()];
let current_Date = date.getDate();
let year = date.getFullYear();


//Display the content of current_Day
document.getElementById('weekends').innerHTML = current_Day;

let today_Date = current_Month[date.getMonth()] + " " + current_Date + " " + year;
document.getElementById('today_date').innerHTML = today_Date;

console.log(day, month, current_date, year);

