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

