const inquirer = require('inquirer');
const game = require('./game.js');
let app = {};
const ui = new inquirer.ui.BottomBar();
// Start game with inquirer
function startGame() {
	inquirer
		.prompt([
			{
		    type: "list",
		    name: "level",
		    message: "Let\'s play a game, select a difficulty level...",
		    choices: ["Easy", "Medium", "Hard"]
  		}
		])
		.then(answer => {
			// Difficulty determines how many guesses the user gets
			let level = answer.level === 'Easy' ? 20 : answer === 'Medium' ? 15 : 10;
			app = new game(level);
			app.startGame();
			userGuess();
		});
}
// Ask user to guess letters
function userGuess() {
	// User should only enter 1 character at a time
	inquirer
		.prompt([
			{
				type: "input",
				name: "answer",
				message: "Guess a letter! Tries remaining: " + app.guesses,
				validate: validateAnswerFormat
			}
		])
		.then(answer => {
			// Check answer
			app.checkAnswer(answer);
			// Display word
			ui.log.write(app.word.wordText);
			// Indicate if the correct letter was guessed
			console.log(app.displayMessage);
			// If the game is still running call function again to continue
			if(app.isPlaying) {
				userGuess();
			}
			// If the game is not running ask user if they want to play again
			else if (!app.isPlaying)
				restartGame();
		});
}
// Check to see if user wants to play again
function restartGame() {
	// User should only select y or n
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'restart',
				message: app.displayMessage,
				validate: validateRestartFormat	
			}
		])
		.then(answer => {
			if(answer.restart.toLowerCase() === 'y')
				startGame();
			else if(answer.restart.toLowerCase() === 'n') {
				console.log('Thanks for playing!');
				process.exit();
			}
		})
}
// Validate answers are in correct format 
function validateAnswerFormat(input) {
	if(input.length === 1)
		return true;
	else
		return 'You can only enter one character at a time';
}
// Validate restart response is in correct format
function validateRestartFormat(input) {
	if(input.toLowerCase() !== 'y' && input.toLowerCase() !== 'n')
		return 'You must type y or n';
	else
		return true;
}

startGame();