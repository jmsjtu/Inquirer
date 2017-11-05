const letter = require('./letter.js');
const randomWords = require('random-words');

function Word() {
	this.letterArray = [];
	this.letterObjArray = [];
	this.wordText = '';
};
// Randomly generate word and split the word into an array
Word.prototype.generateWords = function() {
	this.letterArray = randomWords().split('');
};
// For each letter from letterArray create a new Letter object with the corresponding letter and add it to the letterObjArray
Word.prototype.createLetters = function() {
	this.letterArray.forEach(function(l){
		let newLetter = new letter(l);
		this.letterObjArray.push(newLetter);
	}.bind(this));
	this.stringLetters();
};
// Call functions to create letters
Word.prototype.generateData = function() {
	this.generateWords();
	this.createLetters();
};
// Join letters together to form text that will be displayed in console
Word.prototype.stringLetters = function() {
	// Only join display text to hide letters from user
	this.wordText = this.letterObjArray.map(function(letter) {
		return letter.display;
	}).join(' ');
};

module.exports = Word;