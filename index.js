const inquirer = require('inquirer');
const game = require('./game.js');
let app = {};
const ui = new inquirer.ui.BottomBar();

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
			let level = answer.level === 'Easy' ? 20 : answer === 'Medium' ? 15 : 10;
			app = new game(level);
			app.startGame();
			userGuess();
		})
}

function userGuess() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "answer",
				message: "Guess a letter!",
				validate: validateFormat
			}
		])
		.then(answer => {
			app.checkAnswer(answer);
			ui.log.write(app.word.wordText);
			if(app.isPlaying) {
				userGuess();
			}
		})
}

function validateFormat (input) {
	if(input.length === 1)
		return true;
	else
		return 'You can only enter one letter at a time';
}

startGame();