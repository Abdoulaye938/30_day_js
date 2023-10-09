//for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
//----------------------
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

//--------------------------
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

//-----------------------------------
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

//----------------Ajouter tous les éléments du tableau
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // can be shorten, sum += numbers[i]
}

console.log(sum);

//---------------------Création d'un nouveau tableau basé sur le tableau existant
const numbers1 = [1, 2, 3, 4, 5];
const newArr1 = [];
let sum1 = 0;
for (let i = 0; i < numbers1.length; i++) {
  newArr1.push(numbers1[i] ** 2);
}

console.log(newArr1);

//----------while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
//-----------------------do while loop
let a = 0;
do {
  console.log(a);
  a++;
} while (a <= 5);

//------------------for of loop--
for (const element of arr) {
  // code goes here
}

//---------------

const numbers3 = [1, 2, 3, 4, 5];

for (const num of numbers3) {
  console.log(num);
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num);
}

// adding all the numbers in the array
let sum2 = 0;
for (const num of numbers) {
  sum2 = sum2 + num;
}
console.log(sum2); // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

for (const tech of webTechs) {
  console.log(tech[0]);
}

//---------------break
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

//---------------------continue---
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
