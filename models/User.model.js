const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    tickets: [{type: mongoose.Types.ObjectId, ref:'Tickets', default: null}] 
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;