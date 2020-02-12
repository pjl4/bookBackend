const Book = require('./models/Book');
const data = require('./seeds.json');

Book.remove({})
	.then(() => {
		return Book.collection.insertMany(data);
	})
	.then(() => {
		process.exit();
	});
