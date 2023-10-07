//time object

let date = new Date();

let year = date.getFullYear();

let month = String(date.getMonth() + 1).padStart(2, '0');

let day = String(date.getDate()).padStart(2, '0');

var hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');


// YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
