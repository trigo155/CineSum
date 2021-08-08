const express = require('express');

const router = express.Router();

const controller = require('../controllers/movie.controller');

router.get('/', controller.getMovies);

router.post('/create', controller.createMovies);

router.put('/edit-movie', controller.editMovies);

router.delete('/delete-movie', controller.deleteMovies);

router.get('/title/:name', controller.findMovie);

module.exports = router;