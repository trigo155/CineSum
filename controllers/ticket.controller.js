const Tickets = require('../models/Ticket.model');

const getTickets = async(req, res, next) => {
    try {
        const tikets = await Tickets.find();
        console.log(tikets);
        return res.status(200).json(tikets)
    } catch (error) {
        return next(error);
    }
};




module.exports = { getTickets };