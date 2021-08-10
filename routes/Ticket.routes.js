const express = require('express');

const router = express.Router();

const controller = require('../controllers/ticket.controller');


router.get('/', controller.getTickets);

router.post('/create', controller.createTickets);

router.delete('/delete-ticket', controller.deleteTicket);





module.exports = router;