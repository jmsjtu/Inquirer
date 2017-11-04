const word = require('./word.js');

function Game(guess) {
	this.isPlaying = false,
	this.guesses = guess,
	this.word = new word(),
	this.displayMessage = '';
};

Game.prototype.startGame = function() {
	this.isPlaying = true;
	this.word.generateData();
};

Game.prototype.endGame = function() {
	this.isPlaying = false;
};

Game.prototype.gameOverCheck = function() {
	if(this.guesses <= 0)
		this.endGame();
};

Game.prototype.checkAnswer = function(answer) {
	if(this.isPlaying === true) {
		this.gameOverCheck();
		this.guesses--;

		if(this.word.wordText.indexOf(answer.answer) !== -1) {
			this.displayMessage = 'CORRECT!!!';
			revealLetter(answer.answer);
		}
		else if(this.word.wordText.indexOf(answer.answer) === -1)
			this.displayMessage = 'WRONG!!!';
		
		this.word.stringLetters();
	};
};

Game.prototype.revealLetter = function(letter) {
	this.word.letters.forEach(function(letter){
		if (letter.letter.indexOf(answer.answer) !== -1) 
			letter.reveal();
	});
};

module.exports = Game;