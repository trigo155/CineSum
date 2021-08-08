const express = require('express');

const router = express.Router();

const controller = require('../controllers/cinema.controllers');

router.get('/', controller.getCinema);

router.post('/create-cinema', controller.createCinema);

router.put('/add-movie', controller.addMovie);

router.delete('/delete-cinema', controller.deleteCinema);



module.exports = router;