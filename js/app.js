'use strict';

//Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not.
//It's up to you! It's your project!

//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no
//responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering
//all-caps Y/N or YES/NO answers, too.

//Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console
// for each question of the guessing game.

//Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have

//Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good
//commit messages that explain the WHY of the commit.

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
  alert('And you know this! No gravy on my biscuits, my pizza can\'t set in grease, no sauce dripping on my burger bun.');
} else {
  alert('-_- You cannot be serious.');
}

// Question 3
var eating = prompt('Am I eating right now?').toLowerCase();
console.log('Currently eating answer is ' + eating);

if (eating === 'n' || eating === 'no') {
  alert('Silly rabbit. I\'m always eating!');
} else {
  alert('Darn skippy! Want some?');
}

// Question 4
var lift = prompt('Did I hit the gym this morning?').toLowerCase();
console.log('Hit the gym answer is ' + lift);

if (lift === 'n' || lift === 'no') {
  alert('Nah - and if that\'s ever true, please make sure I\'m okay.');
} else {
  alert('Mhmmm...Always. Be. Lifting.');
}

// Question 5
var codeFellows = prompt('Am I glad I came to Code Fellows?').toLowerCase();
console.log('Code Fellows answer is ' + codeFellows);

if (codeFellows === 'n' || codeFellows === 'no')  {
  alert('Aw...I hope you\'re just testing my code. I\'m very glad I came.');
} else {
  alert('Yep. And to think I nearly didn\'t...');
}
