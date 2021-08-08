const express = require('express');

const router = express.Router();

const controller = require('../controllers/cinema.controllers');

router.get('/', controller.getCinema);

router.post('/create-cinema', controller.createCinema);

router.put('/add-movie', controller.addMovie);

module.exports = router;