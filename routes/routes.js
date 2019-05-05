const express = require('express');
const app = express.Router();
const PostController = require('../Controllers/PostController');


app.get('/',PostController.index)
app.get('/:id',PostController.show )
app.post('/',PostController.store)


module.exports = app;