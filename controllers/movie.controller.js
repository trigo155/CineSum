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
}


module.exports = { getMovies, createMovies };