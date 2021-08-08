const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB_URL = process.env.DB_URL;


const connect = async() => {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });

        console.log('Conectado correctamente a la DB');
    } catch (error) {
        console.log(`Ha ocurrido un error conectando a la base de datos ${error}`);
    }
};

module.exports = { DB_URL, connect };