const Ticket = require('../models/Ticket.model');

const getTickets = async(req, res, next) => {
    try {
        const tikets = await Ticket.find().populate({ 
            path: 'cinema',
            populate: { path: 'movie' }
        });
        return res.status(200).json(tikets)
    } catch (error) {
        return next(error);
    }
};


const createTickets = async(req, res, next) => {
    try {
        const { number, ubication, capacity, horary, cinema } = req.body;
        const newTicket = new Ticket({
            number,
            ubication, 
            capacity,
            horary: new Date(horary),
            cinema
        });

        const createdTicket = await newTicket.save();
        return res.status(200).json(createdTicket);
    } catch (error) {
        return next(error);
    }
};

const deleteTicket =  async (req, res, next) => {
    try {
        const { _id } = req.body;
        const ticketDeleted = await Ticket.findByIdAndDelete(_id);

    
        if (!ticketDeleted) {
            return res.json("El ticket no coincide con la reserva efectuada");
        } else {
            return res.json("Se ha eliminado la reserva correctamente");
        }
    } catch (error) {
        return next(error);
    };
}



    



module.exports = { getTickets, createTickets, deleteTicket };