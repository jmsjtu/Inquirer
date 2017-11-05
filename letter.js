function Letter(letter) {
	this.letter = letter;
	this.display = '_';
};
// Reveal letter
Letter.prototype.reveal = function() {
	this.display = this.letter;
};

module.exports = Letter;