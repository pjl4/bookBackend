const express = require('express');
const router = express.Router();
const Book = require('../db/models/Book');

router.get('/', (req, res) => {
	Book.find({}).then((books) => {
		res.json(books);
	});
});
router.post('/', (req, res) => {
	console.log(
		'REQUEST BODY\n_______________________________________________________________________________________________\n',
		req.body,
		'\n_______________________________________________________________________________________________\nREQUEST BODY'
	);
	Book.create(req.body).then((book) => {
		res.json(book);
	});
});
router.get('/:id', (req, res) => {
	Book.findById(req.params.id).then((book) => {
		res.json(book);
	});
});
router.put('/:id', (req, res) => {
	Book.findByIdAndUpdate(req.params.id, req.body)
		.then((book) => {
			res.json(book);
		})
		.catch((error) => {
			console.log(error);
		});
});
router.delete('/:id', (req, res) => {
	Book.findByIdAndDelete(req.params.id).then((book) => {
		res.json(book);
	});
});
module.exports = router;
