const mongoose = require('mongoose');

const { Schema } = mongoose;

const CinemaSchema = new Schema({
    name: { type: String, required: true },
    ubication: { type: String, required: true },
    capacity: { type: Number, required: true },
    horary: { type: String },
    movie: [{ type: mongoose.Types.ObjectId, ref:'Movies' }],

}, { timestamps: true });

const Cinema = mongoose.model('Cinemas', CinemaSchema);

module.exports = Cinema;