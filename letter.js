function Letter(letter) {
	this.letter = letter;
	this.display = '_';
};

Letter.prototype.reveal = function() {
	this.display = this.letter;
};

module.exports = Letter;