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
		this.isPlaying = false;
}

Game.prototype.checkAnswer = function(answer) {
	if(this.isPlaying === true) {
		// gameOverCheck();
		this.guesses--;
		this.word.letters.filter(function(letter){
			return letter.letter === answer;
		});
	};
};



module.exports = Game;