const mongoose = require('mongoose');

const { Schema } = mongoose;

const TicketSchema = new Schema({
    number: { type: Number, required: true },
    ubication: { type: String, required: true },
    capacity: { type: String, required: true },
    horary: { type: Date, required: true },
    cinema: [{ type: mongoose.Types.ObjectId, ref:'Cinemas' }],
    user: {type: mongoose.Types.ObjectId, ref:'User' },
}, 
{ timestamps: true });

const Ticket = mongoose.model('Tickets', TicketSchema);

module.exports = Ticket;