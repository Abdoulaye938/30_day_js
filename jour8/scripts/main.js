//-----------Window Global Object
a = 'JavaScript';
b = 10;
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b);

//------------------------Global scope
let a = 'JavaScript';
let b = 10;
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    let a = 'Python';
    let b = 100;
    console.log(a, b);
  }
  console.log(a, b);
}
letsLearnScope();
console.log(a, b);

//-------------------Local scope
/**
Block Scope
Function Scope
*/

//scope.js
let a1 = 'JavaScript';
let b1 = 10;
// Function scope
function letsLearnScope() {
  console.log(a1, b1);
  let value = false;
  // block scope
  if (true) {
    let a1 = 'Python';
    let b1 = 20;
    let c1 = 30;
    let d1 = 40;
    value = !value;
    console.log(a1, b1, c1, value); // Python 20 30 true
  }
  console.log(a1, b1, value); // JavaScript 10 true
}
letsLearnScope();
console.log(a1, b1); // JavaScript 10, accessible

//--------------------------
//scope.js
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

//----------------------------------------
//scope.js
function letsLearnScope() {
  const gravity = 9.81;
  console.log(gravity);
}

if (true) {
  const gravity = 9.81;
  console.log(gravity);
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

//---------------------Object

const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  isMarried: true,
};
console.log(person);

//--------------------------------
const personNew = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  'phone number': '+3584545454545',
};

// accessing values using .
console.log(personNew.firstName);
console.log(personNew.lastName);
console.log(personNew.age);
console.log(personNew.location); // undefined

console.log(personNew['firstName']);
console.log(personNew['lastName']);
console.log(personNew['age']);
console.log(personNew['age']);
console.log(personNew['location']); // undefined

//------------
console.log(personNew['phone number']);

//-----------------------------
const personnew = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(personnew.getFullName());
// Asabeneh Yetayeh
