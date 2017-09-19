'use strict';

//Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
//Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
//Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
//Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

//var userName = prompt('Thanks for stopping by my About Me page! What is your name?');

//alert('Hi, ' + userName + ', nice to meet you! See if you can get the right answers to the following questions about me.');

// Question 1
var fiveSiblings = prompt('Do I have 5 sisters?').toLowerCase();
console.log('Five siblings answer is ' + fiveSiblings);

if (fiveSiblings === 'n' || fiveSiblings === 'no') {
  // Tell the user the answer is correct
  alert('You got it!');
} else {
  // Tell the user the anser is incorrect
  alert('Almost. I have 4 sisters; I\'m fourth in birth order.');
}

// Question 2
var soggyBread = prompt('Do I love eating soggy bread?');
console.log('Soggy bread answer is ' + soggyBread);

if (soggyBread === 'n' || soggyBread === 'no') {
  alert('And you know this! No gravy on my biscuits, my pizza can\'t set in grease, no sauce dripping on my bun.');
} else {
  alert('-_- You cannot be serious.');
}

var q3;
