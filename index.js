console.clear();
// String concatenation
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName
console.log(fullName[0].toLowerCase());

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());

console.log(fullName.indexOf('e'));

/*
common string methods
let email =  'jsephgutierrez@gmail.com';
let result = email.lastIndexOf('l');
let result = email.slice(0, 5);
let result = email.substring(5, 10);
let result = email.replace('j', 'h');
console.log(result); 
*/

//template string 
const title = 'Best Books of 2022';
const author = 'Bruno';
const likes = 10;

//concatenation way
let result = 'The blog called' + title + 'by' + author + 'has' + likes + 'likes'
console.log(result);
//template string way
let result1 = `The blog called ${title} by ${author} has ${likes} likes`
console.log(result1);
//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author} </p> 
<span>This blog has ${likes} likes</span>
`;
console.log(html);

//ARRAYS
let colors = ['red', 'green', 'blue'];
let names = ['John', 'Mary' ,'Smith', 10];
// let output = colors.join('-');
// let result2 = colors.concat(names);
// let output = names.indexOf(10);
// let output = colors.push('black')
console.log(colors);

// let email = "sefi@gmail.com";
// let resultOne = email.includes('*'); // True
// let resultTwo = names.includes('Mary'); //False
// console.log(resultTwo);

let age = 24;
// console.log(age == 24);
// console.log(age == 25);
// console.log(age != 25);
// console.log(age > 25);
// console.log(age >= 24);

// let fName = 'joseph';
// console.log(fName == 'joseph');
// console.log(fName == 'Joseph');

//loose comparison
// console.log(age != 24);
// console.log(age !='24');

//strict comparison
// console.log(age === 24);
// console.log(age === '24');
// console.log(age !== 24);
// console.log(age !== '24');

//type conversion
let points = '100';
// points = Number(points);
// points = String(points);
console.log(points + 1);
console.log(typeof points);

//Control Flow

// for (let index = 0; index < 5; index++) {
//   console.log('in loop:' , index);  
// }
// console.log('looped finished');

// const fNames = ['John', 'Smith', 'Doe', 'Mary'];

// for (let i = 0; i < fNames.length; i++) {
//   // console.log(fNames[i]);
//   const html = `<div>${fNames[i]}</div>`;
//   console.log(html);
// }

// const locations = ['US', 'EU', 'ASIA', 'SG'];

// if (locations.length > 5) {
//   console.log('Those are regions');
// } else {
//   console.log('the statement is false');
// }

//IF ELSE AND ELSE IF
// const password = 'p@ssword';

// if (password.length >= 12 && password.includes('@')) {
//   console.log('the password is mighty strong');
// } else if (password.length >= 8 || password.includes('@')){
//   console.log('that password is long enough');
// } else {
//   console.log('that password is not long enough');
// }

//NOT LOGICAL
// let user = false;

// if (!user) {
//   console.log('You must be logged in to continue');
// }

// const grade = 'a';

// switch (grade) {
//   case 'A' && 'a':
//     console.log('U got an A points');
//     break;
//   case 'B':
//     console.log('U got an B points');
//     break;
//   case 'C':
//     console.log('U got an C points');
//     break;
//   case 'D':
//     console.log('U got an D points');
//     break;
//   case 'E':
//     console.log('U got an E points');
//     break;
//   default:
//     console.log("Out of scope");
// }

// VARIABLES & Block Scope
// let year = 2010;

// if (true) {
//   let year = 2009;
//   let word = 'Click';
//   console.log('inside code block:', year, word);
// }
// console.log('outside code block:', year);


// FUNCTION DECLARATION

// function greet() {
//   console.log('hola');
// }
// greet();

// function expression

// const speak = function(name,address) {
//   console.log(`Good morning ${name} from ${address}`);
// }
// speak("Joseph", "PH");


//regular FUNCTION
// const calcArea = function(radius) {
//   return 3.14 * radius**2;
// }
// const area = calcArea(10);
// console.log('area is:' , area);


//Arrow Function
// const calculateArea = radius => {
// return 3.14 * radius**2;
// };
// // const calculateArea = radius => 3.14 * radius**2;

// const area = calculateArea(5);
// console.log('area is:' , area);



/*
const greet = () => 'Good day';
let greetings = greet();
console.log(greetings);

//methods
const day = 'Monday';
let xxx = day.toUpperCase();
console.log(xxx);
*/

//CALLBACKS & Foreach

// const myFunc = (callbackFunc) => {
//   let value = 60 + 10;
//   callbackFunc(value);
// }

// myFunc(value => {
//   // do something
//   console.log(value);
// });

// const people = ['Franz', 'Emman' ,'Kim', 'Thors', 'Albert'];

// const logPerson = (person, index) => {
//   console.log(`${index} - Hi ${person}`);
// }

// people.forEach(logPerson);

//OBJECTS

// const blogs = [
//   {title: 'Jujutsu', likes: 5},
//   {title: 'Deku', likes: 10},
//   {title: 'Shield', likes: 15}
// ];

// let user = {
//   name: 'John',
//   age: '22',
//   email: 'sefii@gmail.com',
//   location: 'madrid',
//   blogs: [
//     {title: 'Jujutsu', likes: 5},
//     {title: 'Deku', likes: 10},
//     {title: 'Shield', likes: 15}
//   ],
//   login: function(){
//     console.log('user logged in');
//   },
//   logout: function(){
//     console.log('user logged out');
//   },
//   logBlogs: function(){
//     // console.log(this.blogs);
//     console.log('this user has written blogs');
//     this.blogs.forEach(blog => {
//       console.log(blog.title, blog.likes);
//     })
//   }
// };
// // user.age = 24;
// // user.login();
// // console.log(user.blogs);
// user.logBlogs();
// console.log(this);


//Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.8;
console.log(Math.round(area));
console.log(Math.floor(area)); // Hindi nag rround off
console.log(Math.ceil(area)); // Vice versa of floor method
console.log(Math.trunc(area)); //nirretain lang yung whole number

const random = Math.random();
console.log(Math.round(random * 100));

let scoreOne = 75;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

//reference values

const userOne = {name: 'qwe', age: 100};
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 150;
console.log(userOne, userTwo);





















