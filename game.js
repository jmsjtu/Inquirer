const word = require('./word.js');

function Game(guess) {
	this.isPlaying = false,
	this.guesses = guess,
	this.word = new word(),
	this.displayMessage = '';
};
// Set state for game start
Game.prototype.startGame = function() {
	this.isPlaying = true;
	this.word.generateData();
};
// Set state for game end
Game.prototype.endGame = function() {
	this.isPlaying = false;
};
// Check if game should end
Game.prototype.gameOverCheck = function() {
	// Ran out of guesses
	if(this.guesses <= 0){
		this.displayMessage = 'You ran out of tries!  Would you like to try again? (y/n)'
		this.endGame();
	}
	// All the correct words guessed
	else if(this.word.wordText.indexOf('_') === -1) {
		this.displayMessage = 'Congratulations!!!  Would you like to play again (y/n)?'
		this.endGame();
	}
};
// Check if answer is correct
Game.prototype.checkAnswer = function(answer) {
	if(this.isPlaying === true) {
		this.guesses--;
		// If answer is in the letterArray it is correct
		if(this.word.letterArray.indexOf(answer.answer) !== -1) {
			this.displayMessage = 'CORRECT!!!';
			// Reveal correctly guessed letter
			this.revealLetter(answer.answer);
		}
		// If answer is not in the letterArray it is correct
		else if(this.word.letterArray.indexOf(answer.answer) === -1)
			this.displayMessage = 'WRONG!!!';
		// Recreate the letter string to include correctl guessed letters
		this.word.stringLetters();
		// Check if game should end
		this.gameOverCheck();
	};
};
// Reveal correctly guessed letters
Game.prototype.revealLetter = function(answer) {
	this.word.letterObjArray.forEach(function(letter){
		if (letter.letter.indexOf(answer) !== -1) 
			letter.reveal();
	});
};

module.exports = Game;