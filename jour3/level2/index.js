//area of a triangle
let base = Number(prompt("enter base of the triangle"));
let height = Number(prompt("enter height of the triangle"));
let area = 0.5 * base * height;
console.log(`the area of the triangle is ${area}`);

//perimeter of a triangle
let sideA = Number(prompt("enter side A of the triangle"));
let sideB = Number(prompt("enter side B of the triangle"));
let sideC = Number(prompt("enter side C of the triangle"));
let perimeter = sideA + sideB + sideC;
console.log(`the perimeter of the triangle is ${perimeter}`)

//area and perimeter of a rectangle
let length = Number(prompt("enter length of the rectangle"));
let width = Number(prompt("enter width of the rectangle"));
let areaOfRectangle = length * width;
let perimeterOfRectangle = 2 * (length + width);
console.log(`the area of the rectangle is ${areaOfRectangle} while the perimeter is ${perimeterOfRectangle}`)

//area and circumference of a circle
const pi = 3.14
let radius = Number(prompt("enter radius of a circle"));
let areaOfCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`the area of the circle is ${areaOfCircle} while the circumference is ${circumference}`)

// Equation: y = mx + b
var m = 2; // slope
let b = -2; // y-intercept

// Calculate x-intercept (x = -b/m)
let xIntercept = -b / m;
console.log(`The slope is ${m}`);
console.log(`The y-intercept is ${b}`);
console.log(`The x-intercept is ${xIntercept}`);



let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;

// Calculate slope
let slope = (y2 - y1) / (x2 - x1);

console.log(`The slope between point (2, 2) and point(6,10) is ${slope}`);

if (slope === m) {
    console.log('The slopes are equal.');
  } else {
    console.log('The slopes are not equal.');
  }


function calculateY(x) {
    // Calculate y using the equation y = x^2 + 6x + 9
    var y = x * x + 6 * x + 9;
    return y;
  }
  
for (var x = -10; x <= 10; x++) {
    var y = calculateY(x);
    if (y === 0) {
      console.log('a x = ' + x + ', y est egale à 0.');
    }
  }

//paiement
var hours = Number(prompt("enter your hours"));
let rate = Number(prompt("enter your rate"));
let pay = hours * rate;
console.log(`votre payment est ${pay}`)


var name = prompt("");

// Check the length of the name
if (name.length > 7) {
  console.log('Your name is long.');
} else {
  console.log('Your name is short.');
}


let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

if (firstName.length > lastName.length) {
    console.log('Your first name, Asabeneh is longer than your family name, Yetayeh');
  } else {
    console.log('Your first name, Asabeneh is not longer than your family name, Yetayeh');
}

//allowed to drive
let age = Number(prompt("what is your age"));
if (age > 18) {
    console.log("you are allowed to drive");
} else {
    console.log(`you are ${age}, you will be allowed to drive after ${18 - age} years`)
}

//Calculate the number of seconds

// Enter number of years you live
let years = Number(prompt("what is your age"));

let seconds = years * 365.25 * 24 * 60 * 60;

console.log(`you lived ${seconds} seconds.`);


//time object

let date = new Date();

let year = date.getFullYear();

let month = String(date.getMonth() + 1).padStart(2, '0');

let day = String(date.getDate()).padStart(2, '0');

var hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');

// YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hours}:${minutes}`);

// DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year} ${hours}:${minutes}`);

// DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);


