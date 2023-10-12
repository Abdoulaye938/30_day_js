//--------------Callback------------------
const callback = (n) => {
  return n ** 2;
};
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));

//-----------------Returning function----------
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

///-----------------------
const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

//-------Setting time--------------
/**
 *setInterval
 *setTimeout
 */

// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration);

//------------------------
function sayHello() {
  console.log('Hello');
}
setInterval(sayHello, 1000);

//--------------------Setting a time using a setTimeout-------

// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration);

function sayHello() {
  console.log('Hello');
}
setTimeout(sayHello, 2000);

//-----------------Functional Programming

//---------------forEach

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});
arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});
arr.forEach((element, index, arr) => console.log(index, element, arr));

//--------------------------------------------
let sum = 0;
const numbersnew = [1, 2, 3, 4, 5];
numbersnew.forEach((num) => console.log(num));
console.log(sum);

///--------------------------------------------
let sumNew = 0;
const numbersNew = [1, 2, 3, 4, 5];
numbersNew.forEach((num) => (sum += num));

console.log(sumNew);

//--------------------------------
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach((element) => console.log(element.toUpperCase()));

//------------------ Methode map--------------

// const modifiedArray = arr.map(function (element, index, arr) {
//   return element;
// });

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers1 = [1, 2, 3, 4, 5];
const numbersSquare = numbers1.map((num) => num * num);

console.log(numbersSquare);

//-------------------------------

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

//----------------------------------

const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];
const countriesToUpperCase = countries2.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

//-----------------------Methode filter------------------------

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
);
console.log(countriesContainingLand);

//--------------------
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'));
console.log(countriesEndsByia);

//-----------------------------
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

//-----------------------------------

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

//------------------------- Methode reduce------------
arr.reduce((acc, cur) => {
  return;
}, initialValue);

//-----------------------
const number = [1, 2, 3, 4, 5];
const summ = number.reduce((acc, cur) => acc + cur, 0);

console.log(summ);
//----------------------- methode every-----------------

const namesnew = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const areAllStr = namesnew.every((name) => typeof name === 'string'); // Are all strings?

console.log(areAllStr);

//-------------------
const bools = [true, true, true, true];
const areAllTrue = bools.every((b) => b === true); // Are all true?

console.log(areAllTrue); // true

//---------------------Methode find------------------
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age);

//---------------------
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const result = names1.find((name) => name.length > 7);
console.log(result);

//--------------------
const scores1 = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
];

const score = scores1.find((user) => user.score > 80);
console.log(score);

//--------------------methode findIndex------------------
const namess = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const agess = [24, 22, 25, 32, 35, 18];

const resultt = namess.findIndex((name) => name.length > 7);
console.log(resultt); // 0

const agee = agess.findIndex((age) => age < 20);
console.log(agee); // 5

//--------------------Methode some----------------
const namesss = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const boolss = [true, true, true, true];

const areSomeTrue = boolss.some((b) => b === true);

console.log(areSomeTrue); //true
//---------------------------------
const areAllStrr = names.some((name) => typeof name === 'number'); // Are all strings ?
console.log(areAllStrr); // false

//-------------------Methode sort---------------
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
console.log(products.sort());

//-------------------------------------------------
const numberrs = [9.81, 3.14, 100, 37];
console.log(numberrs.sort());
numberrs.sort(function (a, b) {
  return a - b;
});

console.log(numberrs);

numberrs.sort(function (a, b) {
  return b - a;
});
console.log(numberrs);

//-----------------Sorting Object Arrays
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
});

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1;
  if (a['key'] > b['key']) return 1;
  return 0;
});

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
// [{…}, {…}, {…}, {…}]
