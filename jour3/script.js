/* Booleans */

/*Un type de données booléen représente l'une des deux valeurs :_true_ ou _false_. La valeur booléenne est vraie ou fausse. Le
l'utilisation de ces types de données sera claire lorsque vous démarrerez l'opérateur de comparaison. Toute comparaison renvoie une valeur booléenne
ce qui est vrai ou faux.*/

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

/* Undefined */

/*Si nous déclarons une variable et si nous n'attribuons pas de valeur, la valeur sera indéfinie. En plus de cela, si un
la fonction ne renvoie pas la valeur, elle ne sera pas définie.*/
let firstName;
console.log(firstName); //non défini, car il n'est pas encore affecté à une valeur

/* Operators */
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

//Let us calculate area of a circle
// const areaOfCircle = PI * radius * radius;
// console.log(areaOfCircle); //  314 m

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

/* Opérateurs de comparaison */
/*En programmation, nous comparons des valeurs, nous utilisons des opérateurs de comparaison pour comparer deux valeurs. On vérifie si une valeur est supérieure
ou inférieur ou égal à une autre valeur.*/

console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == '3'); // true, compare only value
console.log(3 === '3'); // false, compare both value and data type
console.log(3 !== '3'); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ''); // true, equivalent
console.log(0 == ' '); // true, equivalent
console.log(0 === ''); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log('mango'.length == 'avocado'.length); // false
console.log('mango'.length != 'avocado'.length); // true
console.log('mango'.length < 'avocado'.length); // true
console.log('milk'.length == 'meat'.length); // true
console.log('milk'.length != 'meat'.length); // false
console.log('tomato'.length == 'potato'.length); // true
console.log('python'.length > 'dragon'.length); // false

/* Objet Date */
/*Le temps est une chose importante. Nous aimons connaître l’heure d’une certaine activité ou d’un événement. En JavaScript, heure actuelle et
la date est créée à l’aide de l’objet Date JavaScript. L'objet que nous créons à l'aide de l'objet Date fournit de nombreuses méthodes pour travailler
avec la date et l'heure. Les méthodes que nous utilisons pour obtenir des informations sur la date et l'heure à partir des valeurs d'un objet date commencent par un
mot _get_ car il fournit l'information.

_getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(),
getTime(), getDay()_*/

//Création d'un objet temporel
const now1 = new Date();
console.log(now1); // Fri Oct 06 2026 18:29:11 GMT

//Getting full year
// const date = new Date()
// console.log(now.getFullYear()); // 2023

//Getting month
// const mois = new Date();
// console.log(now.getMonth()); // 9, because the month is October,  month(0-11)

/* Formatons ces valeurs dans un format temporel lisible par l'homme. */
const now = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 6/10/2023 18:46
