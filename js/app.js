'use strict';

var score = 0;

var userName = prompt('Thanks for visiting my About Me page! What\'s your name?');

if (!userName) {
  userName = prompt('C\'mon, don\'t be like that. What\'s your name?');
}

alert('Hello, ' + userName + '! Let\'s see if you can guess the answers to the following 7 prompts about me. Please only enter yes/no or y/n.');

// Question 1
var fiveSiblings = prompt('Do I have 5 siblings?').toLowerCase();
console.log('Correct five siblings answer is no\nuser entered: ' + fiveSiblings);

if (fiveSiblings === 'n' || fiveSiblings === 'no') {
  // Tell the user the answer is correct
  alert('You got it! I only have 4 siblings. My sisters are Averon, Norseen, Chana, and Avery.');
  score++;
} else if (fiveSiblings === 'y' || fiveSiblings === 'yes') {
  // Tell the user the anser is incorrect
  alert('Almost. I have 4 siblings. My sisters are Averon, Norseen, Chana, and Avery.');
} else {
  alert('Sorry, your input is invalid.');
}

// Question 2
var soggyBread = prompt('Do I love eating soggy bread?').toLowerCase();
console.log('Correct soggy bread answer is no\nuser entered: ' + soggyBread);

if (soggyBread === 'n' || soggyBread === 'no') {
  // User is correct
  alert('And you know this! No gravy on my biscuits, my pizza can\'t set in grease, no sauce dripping on my burger bun.');
  score++;
} else if (soggyBread === 'y' || soggyBread === 'yes') {
  // User is incorrect
  alert('-_- You cannot be serious.');
} else {
  alert('Sorry, your input is invalid.');
}

// Question 3
var eating = prompt('Am I eating right now?').toLowerCase();
console.log('Correct eating answer is yes\nuser entered: ' + eating);

if (eating === 'n' || eating === 'no') {
  // User is incorrect
  alert('Silly rabbit. I\'m always eating!');
} else if (eating === 'y' || eating === 'yes') {
  // User is correct
  alert('Darn skippy! Want some?');
  score++;
} else {
  alert('Sorry, your input is invalid.');
}

// Question 4
var lift = prompt('Did I hit the gym this morning?').toLowerCase();
console.log('Correct hit the gym answer is yes\nuser entered: ' + lift);

if (lift === 'n' || lift === 'no') {
  // User is incorrect
  alert('Nah - and if that\'s ever true, please make sure I\'m okay.');
} else if (lift === 'y' || lift === 'yes') {
  // User is correct
  alert('Mhmmm...Always. Be. Lifting.');
  score++;
} else {
  alert('Sorry, your input is invalid.');
}

// Question 5
var codeFellows = prompt('Am I glad I came to Code Fellows?').toLowerCase();
console.log('Correct Code Fellows answer is yes\nuser entered: ' + codeFellows);

if (codeFellows === 'n' || codeFellows === 'no') {
  // User is incorrect
  alert('Aw...I hope you\'re just testing my code. I\'m very glad I came.');
} else if (codeFellows === 'y' || lift === 'yes') {
  // User is correct
  alert('Yup. And to think I nearly didn\'t...');
  score++;
} else {
  alert('Sorry, your input is invalid.');
}

var brotherTriesRemaining = 4;
var brotherAnswer = 0;

// Question 6
while (brotherTriesRemaining > 0) {
  var brotherGuess = parseInt(prompt('Let\'s see if you were paying attention. How many brothers do I have? Please enter digits.'), 10);
  console.log('Correct number of brothers: ' + brotherAnswer + '\nuser entered: ' + brotherGuess);

  if (brotherGuess === brotherAnswer) {
    alert('I feel truly treasured. You got it!');
    break;
  } else if (brotherGuess > brotherAnswer) {
    brotherTriesRemaining--;
    alert('I\'ll forgive you ' + brotherTriesRemaining + ' more times.\n Hint: too high');
  } else {
    brotherTriesRemaining--;
    alert('I\'ll forgive you ' + brotherTriesRemaining + ' more times.\n Hint: too low');
  }
}


// Question 7
var sisters = ['averon', 'norseen', 'chana', 'avery'];
var sisterTriesRemaining = 6;
var correct = false;

while (sisterTriesRemaining > 0 && !correct) {
  var sisterGuess = prompt('This final question is more challenging. Enter the name of one of my sisters.').toLowerCase();
  console.log('A correct sister guess can be averon, norseen, chana, or avery\nUser entered: ' + sisterGuess);

  for (var i = 0; i < sisters.length; i++) {
    if (sisterGuess === sisters[i]) {
      //I wanna iterate through my arraaaaay! No pipes!!!!
      console.log(i);
      alert('Yep! She\'s one. Here are all of their names again: ' + sisters);
      correct = true;
      break;
    }
  }

  if (!correct) {
    sisterTriesRemaining--;
    alert('Try to picture question one. You have ' + sisterTriesRemaining + ' more tries to visualize.');
  }
}

if (sisterTriesRemaining === 0) {
  alert('Sorry, you\'re out of guesses. Here they are again: ' + sisters);
}

alert('You guessed ' + score + ' correctly out of 7! I hope you enjoyed that as much as I did. You\'re worthy of learning more, ' + userName + '.');
