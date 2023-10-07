const firstName = "victor"
const lastName = "kenneth"
const country = "Nigeria"
const city = "lagos"
const age = 19;
const isMarried = false;
var year = new Date().getFullYear();

let man = [firstName, lastName, country, city, age, isMarried, year];
man.forEach(function (element) {
    console.log(typeof element);
});

console.log("10" === 10)
console.log(parseInt(9.8) === 10);

//Truthy Values:

var truthyString = 'Hello, World!';

var truthyNumber = 42;

var truthyArray = [1, 2, 3];

//Falsy Value

var falsyString = '';

var falsyNumber = 0;

var falsyValue1 = null;

var falsyValue2 = undefined;


// Comparison expressions
var result1 = 4 > 3;      
var result2 = 4 >= 3;     
var result3 = 4 < 3;     
var result4 = 4 <= 3;     
var result5 = 4 == 4;     
var result6 = 4 === 4;    
var result7 = 4 != 4;   
var result8 = 4 !== 4;   
var result9 = 4 != '4';   
var result10 = 4 == '4';  
var result11 = 4 === '4'; 

// Confirmation using console.log()
console.log(result1);    // true
console.log(result2);    // true
console.log(result3);    // false
console.log(result4);    // false
console.log(result5);    // true
console.log(result6);    // true
console.log(result7);    // false
console.log(result8);    // false
console.log(result9);    // false
console.log(result10);   // true
console.log(result11);   // false


//falsyComparison

var python = 'python';
var jargon = 'jargon';

var Comparison = python.length == jargon.length; // Falsy comparison

console.log(Comparison); // false


var result1 = 4 > 3 && 10 < 12;           // true
var result2 = 4 > 3 && 10 > 12;           // false
var result3 = 4 > 3 || 10 < 12;           // true
var result4 = 4 > 3 || 10 > 12;           // true
var result5 = !(4 > 3);                   // false
var result6 = !(4 < 3);                   // true
var result7 = !(false);                   // true
var result8 = !(4 > 3 && 10 < 12);        // false
var result9 = !(4 > 3 && 10 > 12);        // true
var result10 = !(4 === '4');              // true
var result11 = !('dragon'.includes('on') && 'python'.includes('on')); // true

// Confirmation using console.log()
console.log(result1);   // true
console.log(result2);   // false
console.log(result3);   // true
console.log(result4);   // true
console.log(result5);   // false
console.log(result6);   // true
console.log(result7);   // true
console.log(result8);   // false
console.log(result9);   // true
console.log(result10);  // true
console.log(result11);  // true


var now = new Date()
var year = now.getFullYear() // return year
var month = now.getMonth() + 1 // return month(0 - 11)
var date = now.getDate() // return date (1 - 31)
var hours = now.getHours() // return number (0 - 23)
var minutes = now.getMinutes() // return number (0 -59)

var secondsSince1970 = now.getTime() / 1000; // Convert milliseconds to seconds


console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 
console.log(secondsSince1970);





