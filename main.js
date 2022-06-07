
let currentDate = new Date();
let day = currentDate.getDay();
let month = currentDate.getMonth();

let dayNames = ['Sunday','Monday','Tuesday','Wednesday'];
let monthNames = ['January','Feburary','March','April','May','June','July'];


document.getElementById('currentDay').innerHTML = dayNames[day];
document.getElementById('currentMonth').innerHTML = monthNames[month];

