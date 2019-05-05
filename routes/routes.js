const express = require('express');
const app = express.Router();
const PostController = require('../Controllers/PostController');


app.get('/posts',PostController.index)
app.get('/posts/:id',PostController.show )
app.post('/posts',PostController.store)


module.exports = app;