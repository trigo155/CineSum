const Movies = require('../models/Movie.model')

const getMovies = async(req, res, next) => {
    try {
        const movies = await Movies.find();
        return res.status(200).json(movies)
    } catch (error) {
        return next(error);
    }
};


const createMovies = async(req, res, next) => {
    try {
        const { title, year, director, actors, country, duration, summary, filmProducer, gender } = req.body;
        const newMovie = new Movies({
            title,
            year,
            director,
            actors,
            country,
            duration,
            summary,
            filmProducer,
            gender
        });

        const createdMovie = await newMovie.save();
        return res.status(200).json(createdMovie);
    } catch (error) {
        return next(error);
    }
};


const editMovies = async(req, res, next) => {
    try {
        const { _id, title, year, director, actors, country, duration, summary, filmProducer, gender } = req.body;
        const update = {};

        if (title) update.title = title;
        if (year) update.year = Number(year);
        if (director) update.director = director;
        if (actors) update.actors = actors;
        if (country) update.country = country;
        if (duration) update.duration = duration;
        if (summary) update.summary = summary;
        if (filmProducer) update.filmProducer = filmProducer;
        if (gender) update.gender = gender;


        const updateMovie = await Movies.findByIdAndUpdate(_id, update, { new: true });
        return res.status(200).json(updateMovie);
    } catch (error) {
        return next(error);
    }
};


const deleteMovies = async(req, res, next) => {
    try {
        const { _id } = req.body;
        const movieDeleted = await Movies.findByIdAndDelete(_id);

        if (!movieDeleted) {
            return res.json("El elemento que querías borrar no existe");
        } else {
            return res.json("El elemento se ha borrado correctamente");
        }
    } catch (error) {
        return next(error);
    };
};

const findMovie = async(req, res, next) => {
    try {
        const { name } = req.params;
        const movies = await Movies.find({ title: { '$regex': name, '$options': 'i' } })

        if (movies.length === 0) {
            const error = new Error('Película no encontrada');
            throw error;
        }
        return res.status(200).json(movies);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { getMovies, createMovies, editMovies, deleteMovies, findMovie };