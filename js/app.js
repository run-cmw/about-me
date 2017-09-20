'use strict';

var userName = prompt('Thanks for visiting my About Me page! What\'s your name?');
alert('Hi, ' + userName + ', nice to meet you! Let\'s see if you can guess the correct answers to the following five questions about me.');

// Question 1
var fiveSiblings = prompt('Do I have 5 sisters?').toLowerCase();
console.log('Five siblings answer is ' + fiveSiblings);

if (fiveSiblings === 'n' || fiveSiblings === 'no') {
  // Tell the user the answer is correct
  alert('You got it! I only have 4 sisters: Averon, Norseen, Chana, and Avery.');
} else {
  // Tell the user the anser is incorrect
  alert('Almost. I have 4 sisters, and I\'m fourth in birth order.');
}

// Question 2
var soggyBread = prompt('Do I love eating soggy bread?').toLowerCase();
console.log('Soggy bread answer is ' + soggyBread);

if (soggyBread === 'n' || soggyBread === 'no') {
  // User is correct
  alert('And you know this! No gravy on my biscuits, my pizza can\'t set in grease, no sauce dripping on my burger bun.');
} else {
  // User is incorrect
  alert('-_- You cannot be serious.');
}

// Question 3
var eating = prompt('Am I eating right now?').toLowerCase();
console.log('Currently eating answer is ' + eating);

if (eating === 'n' || eating === 'no') {
  // User is incorrect
  alert('Silly rabbit. I\'m always eating!');
} else {
  // User is correct
  alert('Darn skippy! Want some?');
}

// Question 4
var lift = prompt('Did I hit the gym this morning?').toLowerCase();
console.log('Hit the gym answer is ' + lift);

if (lift === 'n' || lift === 'no') {
  // User is incorrect
  alert('Nah - and if that\'s ever true, please make sure I\'m okay.');
} else {
  // User is correct
  alert('Mhmmm...Always. Be. Lifting.');
}

// Question 5
var codeFellows = prompt('Am I glad I came to Code Fellows?').toLowerCase();
console.log('Code Fellows answer is ' + codeFellows);

if (codeFellows === 'n' || codeFellows === 'no')  {
  // User is incorrect
  alert('Aw...I hope you\'re just testing my code. I\'m very glad I came.');
} else {
  // User is correct
  alert('Yep. And to think I nearly didn\'t...');
}
