const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']; // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']; // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']; // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);

console.log('Fruits:', fruits);
console.log('Number of fruits:', fruits.length);

console.log('Vegetables:', vegetables);
console.log('Number of vegetables:', vegetables.length);

console.log('Animal products:', animalProducts);
console.log('Number of animal products:', animalProducts.length);

console.log('Web technologies:', webTechs);
console.log('Number of web technologies:', webTechs.length);

console.log('Countries:', countries);
console.log('Number of countries:', countries.length);

// type data
const arr = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
]; // arr containing different data types
console.log(arr);

// Création d'un tableau en utilisant split

let js = 'JavaScript';
const charsInJavaScript = js.split('');

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(',');

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = txt.split(' ');

console.log(words);
// le texte comporte des caractères spéciaux, réfléchissez à la façon dont vous pouvez simplement obtenir uniquement les mots
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// Accéder aux éléments du tableau à l'aide de l'index

const fruits1 = ['banana', 'orange', 'mango', 'lemon'];
let firstFruit = fruits1[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

secondFruit = fruits1[1];
console.log(secondFruit); // orange

let lastFruit = fruits1[3];
console.log(lastFruit); // lemon
// Last index can be calculated as follows

let lastIndex = fruits1.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon

///////////////////////////////////
const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

console.log(numbers1.length); // => to know the size of the array, which is 6
console.log(numbers1); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers1[0]); //  -> 0
console.log(numbers1[5]); //  -> 100

let lastIndex1 = numbers1.length - 1;
console.log(numbers[lastIndex1]); // -> 100

//////////////////////////////////////////////////
const webTechs1 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]; // List of web technologies

console.log(webTechs1); // all the array items
console.log(webTechs1.length); // => to know the size of the array, which is 7
console.log(webTechs1[0]); //  -> HTML
console.log(webTechs1[6]); //  -> MongoDB

let lastIndex4 = webTechs1.length - 1;
console.log(webTechs[lastIndex4]); // -> MongoDB

////////////////////////////////
const countries3 = [
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
]; // List of countries

console.log(countries); // -> all countries in array
console.log(countries[0]); //  -> Albania
console.log(countries[10]); //  -> Kenya

let lastIndex3 = countries.length - 1;
console.log(countries[lastIndex]); //  -> Kenya

const countries5 = [
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
]; // List of countries

console.log(countries5); // -> all countries in array
console.log(countries5[0]); //  -> Albania
console.log(countries5[10]); //  -> Kenya

let lastIndex2 = countries5.length - 1;
console.log(countries[lastIndex2]); //  -> Kenya

// Modification d'un élément de tableau

const numbers6 = [1, 2, 3, 4, 5];
numbers6[0] = 10; // changing 1 at index 0 to 10
numbers6[1] = 20; // changing  2 at index 1 to 20

console.log(numbers6); // [10, 20, 3, 4, 5]

const countries6 = [
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

countries6[0] = 'Afghanistan'; // Replacing Albania by Afghanistan
let lastIndex6 = countries6.length - 1;
countries[lastIndex6] = 'Korea'; // Replacing Kenya by Korea

console.log(countries6);
