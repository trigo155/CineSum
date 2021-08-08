const moongose = require('moongose');

const { Schema } = mongoose;

const TicketSchema = new Schema({
    number: { type: Number, required: true },
    ubication: { type: String, required: true },
    capacity: { type: String, required: true },
    horary: { type: String, required: true },
    cinema: { type:mongoose.Types.ObjectId, ref: 'Cinema' },
}, { timestamps: true });

const Ticket = moongose.model('Cinemas', TicketSchema);

module.exports = Ticket;