const word = require('./word.js');

function Game(guess) {
	this.isPlaying = false,
	this.guesses = guess,
	this.word = new word()
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
}

Game.prototype.checkAnswer = function(answer) {
	if(this.isPlaying === true) {
		this.gameOverCheck();
		this.guesses--;
		this.word.letters.forEach(function(letter){
			if (letter.letter.indexOf(answer.answer) !== -1) 
				letter.reveal();
		});
		this.word.stringLetters();
	};
};



module.exports = Game;