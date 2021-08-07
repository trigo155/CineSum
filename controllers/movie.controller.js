const Movies = require('../models/Movie.model')

const getMovies = async(req, res, next) => {
    try {
        const movies = await Movies.find();
        return res.status(200).json(movies)
    } catch (error) {
        next(error);
    }
};


const moviePost = (req, res, next) => {

}


module.exports = { getMovies, moviePost };