const getMovie = (req, res, next) => {
    const error = new Error('Nuevo error');
    next(error);
};



module.exports = { getMovie };