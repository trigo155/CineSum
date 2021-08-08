const Cinema = require('../models/Cinema.model');



const getCinema = async(req, res, next) => {
    try {
        const cinema = await Cinema.find().populate('movie');
       if(cinema.length > 0) {
           return res.status(200).json(cinema)
        }else{
            const error = new Error('No se encuentra ningún cine');
            throw error;
        }    
    } catch (error) {
        return next(error);
    }
};

const createCinema =  async(req, res, next) => {
    try {
        const { name, ubication, capacity, horary, movie } = req.body;
        const newCinema = new Cinema({
            name,
            ubication, 
            capacity, 
            horary: new Date (horary),
            movie
        });

        const createdCinema = await newCinema.save();
        return res.status(200).json(createdCinema);
    } catch (error) {
        return next(error);
    }
};

const addMovie = async (req, res, next) => {
    try {
      const cinemaId = req.body.cinemaId;
      const movieId = req.body.movieId;
  
      const updatedCimemas = await Cinema.findByIdAndUpdate(
        cinemaId,
        { $push: { movie: movieId } },
        { new: true }
      );
  
      return res.status(200).json(updatedCimemas);
    } catch (err) {
      next(err);
    }
  };
  

  const deleteCinema = async(req, res, next) => {
    try {
        const { _id } = req.body;
        const cinemaDeleted = await Cinema.findByIdAndDelete(_id);

        if (!cinemaDeleted) {
            return res.json("El cine que querías borrar no existe");
        } else {
            return res.json("El cine se ha borrado correctamente");
        }
    } catch (error) {
        return next(error);
    };
};



module.exports = { getCinema, createCinema, addMovie, deleteCinema};