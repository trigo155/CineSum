const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db');
db.connect();

const movieRoutes = require('./routes/Movie.routes');
const cinemaRoutes = require('./routes/Cinema.routes');
const ticketsRoutes = require('./routes/Ticket.routes');

const PORT = process.env.PORT || 3000;

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use('/movies', movieRoutes);
app.use('/cinema', cinemaRoutes);
app.use('/tickets', ticketsRoutes);

router.get('/', (req, res) => {
    res.send('Hola cara de bola!!!!')
});

app.use('*', (req, res, next) => {
    const err = new Error('No encontramos la ruta que solicita, disculpe');
    return res.status(404).send(err.message);
});

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || "Unespected error");
})

app.listen(PORT, () => {
    console.log(`Servidor a tope con la cope en http://localhost:${PORT}`);
});