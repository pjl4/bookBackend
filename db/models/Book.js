const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true,
		min: 0,
		max: 5
	}
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
