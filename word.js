const letter = require('./letter.js');
const randomWords = require('random-words');

function Word() {
	this.word = [];
	this.letters = [];
	this.wordText = '';
};

Word.prototype.generateWords = function() {
	this.word = randomWords().split('');
};

Word.prototype.createLetters = function() {
	this.word.forEach(function(l){
		let newLetter = new letter(l);
		this.letters.push(newLetter);
	}.bind(this));
	this.stringLetters();
};

Word.prototype.generateData = function() {
	this.generateWords();
	this.createLetters();
};

Word.prototype.stringLetters = function() {
	this.wordText = this.letters.map(function(letter) {
		return letter.display;
	}).join(' ');
};

module.exports = Word;