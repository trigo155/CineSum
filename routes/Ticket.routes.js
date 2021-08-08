const express = require('express');

const router = express.Router();

const controller = require('../controllers/ticket.controller');


router.get('/', controller.getTickets);

router.post('/create', controller.createTickets);

// router.put('/edit-ticket', controller.ediTickets);

// router.delete('/delete-ticket', controller.deleteTickets);



module.exports = router;