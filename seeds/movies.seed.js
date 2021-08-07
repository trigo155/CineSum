const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
const db = require('../config/db');

const movies = [{
        title: 'Con la muerte en los talones',
        year: 1959,
        director: 'Alfred Hitchcock',
        actors: 'Cary Grant, Eva Marie Saint, James Mason, Martin Landau',
        country: 'United States, California',
        duration: '2h 16m',
        summary: 'Roger O.Thornhill es confundido por George Kaplan, un agente del gobierno. Consigue escapar aunque lo siguen de cerca.',
        filmProducer: '',
        gender: 'Suspense',
    },
    {
        title: 'Metróplis',
        year: 1927,
        director: 'Fritz Lang',
        actors: 'Gustav Fröhlich, Brigitte Helm, Alfred Abel, Rudolf Klein-Rogge, Fritz Rasp, Theodor Loos',
        country: 'Alemania',
        duration: '2h 33min',
        summary: 'En una megalópolis del siglo XXI los obreros viven en un gueto subterráneo donde se encuentra el corazón industrial con la prohibición de salir al mundo exterior. Esta gran distopía futurista es un aviso sobre la industrialización sin alma del trabajo, una herramienta política (marxista, pero no exclusivamente) y la primera historia de robots malvados.',
        filmProducer: 'Erich Pommer',
        gender: 'Sci-fi',
    },
    {
        title: 'Cantando bajo la lluvia',
        year: 1952,
        director: 'Stanley Donen, Gene Kelly',
        actors: 'Gene Kelly, Donald O´Connor, Debbie Reynolds, Jean Hagen, Millard Mitchell, Cyd Charisse, Rita Moreno, Douglas Fowley',
        country: 'United States',
        duration: '1h 42m',
        summary: 'Don Lockwood, una gran estrella del cine mudo, rueda su nueva película junto a Lina Lamont, la actriz más famosa del momento. Mientras se debate entre las dudas sobre si su proyecto debe rodarse como película sonora, Don conoce a Kathy, una aspirante actriz con una preciosa voz que le ayudará a darse cuenta de que si quiere triunfar con su última producción debe convertirla en un musical.',
        filmProducer: '',
        gender: 'Musical',
    },
    {
        title: 'Con faldas y a loco',
        year: 1959,
        director: 'Billy Wilder',
        actors: 'Marilyn Morroe, Jack Lemmon, Joe E. Brown, George Raft',
        country: 'United States, Coronado, California',
        duration: '2h 12m',
        summary: 'Dos testigos de asesinatos se disfrazan de miembros de una banda de mujeres para confundir a la mafia que les persigue.',
        filmProducer: '',
        gender: 'Comedy',
    }
];

mongoose
    .connect(db.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async() => {
        const allMovies = await Movie.find();

        if (allMovies.length) {
            await Movie.collection.drop();
            console.log('Colección eliminada correctamente, evitando los duplicados');
        } else {
            console.log('No se encuentan películas');
        }
    })
    .catch(err => console.log('Error al eliminar la colección', err))
    .then(async() => {
        await Movie.insertMany(movies);
        console.log('Películas añadidas con éxito');
    })
    .catch(err => console.log('Error al añadir películas', err))
    .finally(() => mongoose.disconnect());