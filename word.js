const letter = require('./letter.js');
const randomWords = require('random-words');

function Word() {
	this.word = [];
	this.letters = [];
};

Word.prototype.generateWords = function() {
	this.word = randomWords().split('');
};

Word.prototype.createLetters = function() {
	this.word.forEach(function(l){
		let newLetter = new letter(l);
		this.letters.push(newLetter);
	}.bind(this));
};

Word.prototype.generateData = function() {
	this.generateWords();
	this.createLetters();
}

module.exports = Word;