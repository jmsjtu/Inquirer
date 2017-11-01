const inquirer = require('inquirer');
const game = require('./game.js');
let app;

inquirer
	.prompt([
		{
	    type: "list",
	    name: "level",
	    message: "Let\'s play a game...  Chose a difficulty level",
	    choices: ["Easy", "Medium", "Hard"]
	  }
	])
	.then(response => {
		let guesses = response === 'Easy' ? 20 : response === 'Medium' ? 15 : response === 'Hard' ? 10;
		app = new Game(guesses);
	})