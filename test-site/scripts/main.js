// This is a comment

//event, beides gleich, das letzte überschreibt
/*let myHTML = document.querySelector('html');
myHTML.onclick = function() {alert('Ouch!');};

document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
}*/



const myHeading1 = document.querySelector('h1');
myHeading1.textContent = 'Hello world!';

let head2 = 'Hello friends!';
const myHeading2 = document.querySelector('h2');
myHeading2.textContent = head2;

let head3 = 'Hello family!';
const myHeading3 = document.querySelector('h3');
myHeading3.textContent = head3;

let head4 = 'Hello darling!';
const myHeading4 = document.querySelector('h4');
myHeading4.textContent = head4;

let numb1 = 0;
let wahr = true;
let boys = [1,'Bob','Steve','Tom',10];
let boy = boys[0]
let head1 = document.querySelector('h1');

let myVariable = 3;
alert(myVariable === 3); //true
alert(myVariable !== 4); //true
alert(myVariable === 4); //false
alert(!(myVariable === 3)); //false

let boys_string = boys[0] + ' und ' + boys[2];

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

alert(multiply(4, 7));
alert(multiply(0.5, 20));

if (true) {
  var x = 3;
  let y = 4;
}
console.log(x);  // x is 3

function add(num1, num2) {
   let x = 10;
   var y = 100;
   return num1+num2+x+y; 
}
alert(add(1, 1));
alert(x);
//alert(y); //fehler y kennt er nicht

var xx;
console.log(xx === undefined); // true  //hoisting
xx = 3;

//console.log(yy); // ReferenceError hoisted but not initialized
//let yy = 3;

const PI = 3.14;

const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';

const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];

let Sym1 = Symbol("Sym");
let Sym2 = Symbol("Sym");
  
console.log(Sym1 === Sym2); // returns "false"
// Symbols are guaranteed to be unique.
// Even if we create many symbols with the same description,
// they are different values.

var answer = 42;
answer = 'Thanks for all the fish...';

let xxx = 'The answer is ' + 42; // "The answer is 42"
let yyy = 42 + ' is the answer'; // "42 is the answer"

alert('37' - 7); // 30 // - not automatically converted to string
alert('37' + 7); // "377"

parseInt('101', 2) // 5

let xxxx = '1.1' + '1.1'; // '1.11.1'
let yyyy = (+'1.1') + (+'1.1'); // 2.2   

let coffees = ['French Roast', 'Colombian', 'Kona'];

let fish = ['Lion', , 'Angel', ,]; // fish[1] is undefined, 4 elements


var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };
console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota 


var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };
console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda


var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
//console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']);  // An empty string
//console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!

var s = 'foo';
s = "bar";
s = '1234';
s = 'one line \n another line';
s = "John's cat";
var t = s.length; //10 

var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";

var home = 'c:\\temp'; //c:\temp

var str = 'this string \
is broken \
across multiple \
lines.';

var poem = 
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.';
alert(poem);



//image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/opener.png') {
      myImage.setAttribute ('src','images/opener-alternative.png');
    } else {
      myImage.setAttribute ('src','images/opener.png');
    }
}

//make user change
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName;
}

myButton.onclick = function() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello ' + myName;
  }
}
