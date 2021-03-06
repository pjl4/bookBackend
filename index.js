const express = require('express');
const app = express();
const bookController = require('./controllers/bookController');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/books', bookController);
app.listen(8080, () => {
	console.log('app runnning on 8080');
});
