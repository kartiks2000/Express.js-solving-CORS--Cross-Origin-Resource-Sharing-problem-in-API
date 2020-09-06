const express = require('express');

const router = express.Router();

const feedcontroller = require('../controller/feedcontroller');

// GET   /feed/posts
router.get('/posts',feedcontroller.getposts);

// POST   /feed/posts
router.post('/createpost',feedcontroller.createpost);


module.exports = router;