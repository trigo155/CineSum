const express = require('express');

const router = express.Router();

const controller = require('../controllers/movie.controller');

router.get('/', controller.getMovie);

module.exports = router;