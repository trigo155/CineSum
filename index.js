const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db');
db.connect();

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const movieRoutes = require('./routes/Movie.routes');
const cinemaRoutes = require('./routes/Cinema.routes');
const ticketsRoutes = require('./routes/Ticket.routes');
const indexRoutes = require('./routes/Index.routes');

const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRoutes);
app.use('/movies', movieRoutes);
app.use('/cinema', cinemaRoutes);
app.use('/tickets', ticketsRoutes);



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