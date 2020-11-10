'use strict';

// =================================CONTACT WITH USER
// alert('Hello');

// const result = confirm('are you here?');
// console.log(result);

// const answer = prompt('Have 18?', '18');
// console.log(typeof(answer)); //type

// const answer1 = prompt('Have 18?', '18');
// console.log(answer1 + 5); //string + number

// const answer2 = +prompt('Have 18?', '18');
// console.log(answer2 + 5); //number + number

// const answers = []; // mas of answers

// answers[0] = prompt('name?', '');
// answers[1] = prompt('lastname?', '');
// answers[2] = prompt('age?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// =================================INTERPOLATION

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`Hello, ${user}`);

// =================================OPERATORS

// console.log('arr' + ' - object'); // arr - object
// console.log(4 + ' - object'); // 4 - object
// console.log(4 + '5'); // 45
// console.log(4 + +'5'); // 9

// let incr = 10,
//     decr = 10;

// incr++; //post_inkrement
// decr--; //post_dekrement
// ++incr; //pred_inkrement
// --decr; //pred_dekrement

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 == 8); // true
// console.log(2*4 == '8'); // true
// console.log(2*4 === '8'); // false - strogo
// console.log(2*4+1 != 8); // true
// console.log(2*4+1 !== 8); // true

// const isChecked = true,
//     isClose = false;

// console.log(isChecked && isClose); //false
// console.log(isChecked || isClose); //true
// console.log(!isChecked || isClose); //false

// =================================BACKTICKS

// var person = 'Mike';
// var age = 28;

// function myTag(strings, personExp, ageExp) {
//   var str0 = strings[0]; // "That "
//   var str1 = strings[1]; // " is a "

//   var ageStr;
//   if (ageExp > 99){
//     ageStr = 'centenarian';
//   } else {
//     ageStr = 'youngster';
//   }

//   return `${str0}${personExp}${str1}${ageStr}`;
// }

// var output = myTag`That ${ person } is a ${ age }`;

// console.log(output);

// =================================УСЛОВИЯ

// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('ok');
// }

// (num ===50) ? console.log('ok') : console.log('Error');

// const num1 = 50;
// switch (num1) {
//     case 49:
//         console.log('No');
//         break;
//     case 100:
//         console.log("no");
//         break;
//     case 50:
//         console.log('yes');
//         break;
//     default:
//         console.log('error');
//         break;
// }

// =================================ЦИКЛЫ

//let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if(i===6){
//         //break; // Остановка
//         //continue; // Пропуск
//     }
//     console.log(i);
// }

// =================================ФУНКЦИИ

// let num = 20;

// function showFirstMessage(text) { // function-declaration 
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage('Hello world');

// // function calc(a, b) {
// //     return (a + b);
// // }

// // console.log(calc(4, 3));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () { //function-expression
//     console.log('hello');
// };

// logger();

// const calc = (a, b) => a + b; //стрелочная функция
// const calc1 = (a, b) => {
//     return a + b;
// };

// =================================Методы и Свойства

const str = 'test';
const arr = [1, 2, 3];
// console.log(str.length); //свойство
// console.log(arr.length);
console.log(str.toUpperCase()); // метод - не меняет исходник
console.log(str.toLowerCase()); //не меняет исходник

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));

const logg = 'hello world';
console.log(logg.slice(6, 11)); // slice(начало, конец(не включительно))
console.log(logg.slice(-5, -1)); // с конца
console.log(logg.substring(6, 11)); // как slice без отрицательных
console.log(logg.substr(6, 5)); // substr (начало, сколько символов(без этого вырежется всё до конца))

const num = 12.2;
console.log(Math.round(num)); //округление до ближайшего целого

const test = '12.2px'; 
console.log(parseInt(test));
console.log(parseFloat(test));
