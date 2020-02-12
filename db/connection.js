const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/book', { useNewUrlParser: true })
	.then((instance) => {
		console.log(`connected to db: ${instance.connections[0].name}`);
	})
	.catch((error) => console.log(error));

module.exports = mongoose;
