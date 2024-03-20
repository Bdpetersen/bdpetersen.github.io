// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to DOM elements
const guessField = document.getElementById('guessField');
const guessResult = document.getElementById('guessResult');

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(guessField.value);
  if (isNaN(userGuess)) {
    guessResult.textContent = 'Please enter a valid number.';
  } else if (userGuess < 1 || userGuess > 100) {
    guessResult.textContent = 'Please enter a number between 1 and 100.';
  } else {
    if (userGuess === randomNumber) {
      guessResult.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
      guessResult.textContent = 'Too low! Try again.';
    } else {
      guessResult.textContent = 'Too high! Try again.';
    }
  }
}
