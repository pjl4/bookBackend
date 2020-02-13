const express = require('express');
const router = express.Router();
const Book = require('../db/models/Book');

router.get('/', (req, res) => {
	Book.find({}).then((books) => {
		res.json(books);
	});
});
router.get('/:id', (req, res) => {
	Book.findById(req.params.id).then((book) => {
		res.json(book);
	});
});
router.post('/', (req, res) => {
	Book.create(req.body).then((book) => {
		res.json(book);
	});
});
router.put('/:id', (req, res) => {
	Book.findByIdAndUpdate(req.params.id, req.body).then((book) => {
		res.json(book);
	});
});
router.delete('/:id', (req, res) => {
	Book.findByIdAndDelete(req.params.id).then((book) => {
		res.json(book);
	});
});
module.exports = router;
